
const Product = require("../models/products.models")

//*CREATE
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//*FIND ALL
module.exports.findAllProduct = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json( allDaProducts ))
        
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//*FIND ONE
module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json(oneSingleProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//*UPDATE
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//*DELETE
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}