// This is our SERVER file, the routes which we import from
// The CONTROLLER (burgers_controller.js)

// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create an instance of the express app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ 
  defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes from our router file (burgers_controller.js)
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost: " + PORT);
});