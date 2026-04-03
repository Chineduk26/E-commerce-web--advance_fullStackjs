const Router=require('express').Router();
const productCTRA=require('./product.controller')
const upload=require('../middleware/upload.middleware')


Router.post("/", upload.single("image"), productCTRA.createProduct)
Router.get("/", productCTRA.productlist)
Router.get("/:id", productCTRA.getproduct)
Router.put("/:id", productCTRA.updateProduct)
Router.delete("/:id", productCTRA.deleteProduct)