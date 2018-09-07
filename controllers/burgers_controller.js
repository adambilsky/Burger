// This is our CONTROLLER (ROUTER), which we import from the MODEL
var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// GET ROUTE
// This route returns the list of all burgers in the table
router.get("/", function(request, response) {
    burger.all(function(data) {
        var hbsOjbect = {
            burgers: data
        };
       
        response.render("index", hbsOjbect);
    });
});

// POST ROUTE
// This route handles the creation of new burgers by the user
router.post("/api/burgers", function(request, response) {
    burger.create(["burger_name", "devoured"], [request.body.name, request.body.devoured], function(result) {
        // Return ID of new burger
        response.json({ id: result.insertId });
    });
});

// PUT ROUTE
// This route handles updates to the burgers' status 
// (if they have been eaten, devoured === TRUE)
router.put("/api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);

    burger.update(
        {
            devoured: request.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows == 0) {
                return response.status(404).end();
            }

            burger.all(function(data) {
                
                console.log(data);
                response.render("index", {  burgers: data  });
            });
        }
    );
});

// Export our router for the SERVER file to use
module.exports = router;