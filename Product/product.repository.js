const product = require('./product.models');

const createProduct= async (data)=>{
    return await product.create(data);
}
const getAllproduct = async(Options)=>{
    return await product.findAndCountAll(Options);
}
const getproductById = async(id)=>{
    return await product.findByPk(id);
}
const updateProduct = async(id, data)=>{
    return await product.update(data, {where:{id}})
}
const deleteProduct = async(id)=>{
    return await product.update({isDeleted:true}, {where:{id}})
}

module.exports={
    createProduct,
    getAllproduct,
    getproductById,
    updateProduct,
    deleteProduct
}