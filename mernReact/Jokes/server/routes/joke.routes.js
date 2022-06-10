//import the controller to  use the instantiated model
const JokeController = require("../controllers/joke.controllers")

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes) 
    app.post("/api/jokes" , JokeController.createNewJoke)
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke)
    app.put("/api/jokes/:id", JokeController.updateExistingJoke)
    app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke)
    app.get("/api/jokes/random", JokeController.randomJoke)
}