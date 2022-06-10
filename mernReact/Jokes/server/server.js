const express = require('express');
const app = express();
const PORT = 8000;
const DB_NAME = "jokes"

//----MIDDLEWARE-----
app.use(express.json(), express.urlencoded({extended:true}));

//connect to the mongodb by requiring the mongoose.config.js file
require("./config/mongoose.config"); //platform way

const exportedDBFunction = require("./config/mongoose.config")
exportedDBFunction(DB_NAME);

//import the routes here
const routesFunction = require("./routes/joke.routes")
routesFunction(app);

//START THE SERVER ALWAYS AT THE BOTTOM

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}!!!!`))