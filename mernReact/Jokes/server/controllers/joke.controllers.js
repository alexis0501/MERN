const Joke = require("../models/joke.models");

//CRUD

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => {
            console.log(allDaJokes);
            res.json(allDaJokes);
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewJoke = (req, res) => {
    console.log("this is reqbody" +req.body);
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.randomJoke = (req, res) => {
    joke.find()
        .then(allDaJokes => res.json({
            joke: allDaJokes(Math.floor(allDaJokes.length * Math.random()))
        }))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}