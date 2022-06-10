const Author = require('../models/Author.models');


module.exports.findAllUAuthors = (req, res) => {
    Author.find()
        .then(allDaAuthors => res.json( allDaAuthors )) //* dont put curly braces
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.findOneSingleAuthors = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => res.json(oneSingleAuthor ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.createNewAuthors = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json( newlyCreatedAuthor ))
        .catch(err => res.status(400).json(err));
}


module.exports.updateExistingAuthors = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
    { new: true, runValidators: true }
        )
        .then(updatedAuthor => res.json( updatedAuthor ))
        .catch(err => res.status(400).json(err));
}


module.exports.deleteAnExistingAuthors = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}