const productRep=require('./product.repository')
const {Op}=require('sequelize')
const imageUpload=require('../Utils/cloudinaryUpload')
exports.createProduct=async(data, file)=>{
    if(data.stock <0){
        throw new Error('not empty')
    }
  const imageurl= null;
  if(file){
    const result = await imageUpload(file.buffer);
    imageurl= result.secure_url;
  }
    const productData={
    ...data,
            imageurl,
    }
  
    return await productRep.createProduct( productData);
}
exports.getProduct= async(data)=>{
    const {page =1,limit,minPrice,maxPrice,search}=data;
    const offset=(page-1)*limit;
    let whereClause={isDelected:false}
    if(minPrice && maxPrice){
        whereClause.price={
            [Op.between]:[minPrice, maxPrice]
        }
    }
    if(search){
        whereClause.name={
            [Op.like]:`%${search}%`
        }
    }
    const {count, rows}= await productRep.getAllproduct(
        {
            where:whereClause,
            limit:parseInt(limit),
            offset:parseInt(offset)
        }
    )
    return {
        data:rows, 
        pagination:{
            totalItem:parseInt(count),
            currentPage:parseInt(page),
            totalPage:Math.ceil(count/limit)
        }
    } 
}
exports.getProductById= async(id)=>{
    return await productRep.getproductById(id)
}
exports.updateProduct= async(id, data)=>{
    return await productRep.updateProduct(id, data)
}
exports.deleteProduct= async(id)=>{
    return await productRep.deleteProduct(id)
}