const productService=require('./product.service')

exports.createProduct= async(req ,res)=>{
    const product= await productService.createProduct(req.body, req.file);
    res.status(200).json(product)
}
exports.productlist= async(req ,res)=>{
    const products = await productService.getProduct();
    res.status(200).json(products)
}
exports.getproduct=async(req , res)=>{
    const product = await productService.getProductById(req.params.id);
     res.status(200).json(product)
}
exports.updateProduct=async(req ,res)=>{
    const productUpdate = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json(productUpdate)
}
exports.deleteProduct = async(req , res) =>{
    const deleteProduct = await productService.deleteProduct(req.params.id);
    res.status(200).json(deleteProduct)
}