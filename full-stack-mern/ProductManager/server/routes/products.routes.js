
const ProductController = require("../controllers/products.controllers")

module.exports = (app) =>{
    app.post("/api/products", ProductController.createNewProduct)
    app.get("/api/products", ProductController.findAllProduct)
    app.get("/api/products/:id", ProductController.findOneSingleProduct)
    app.put("/api/products/:id" , ProductController.updateExistingProduct)
    app.delete("/api/products/:id", ProductController.deleteAnExistingProduct)    
}