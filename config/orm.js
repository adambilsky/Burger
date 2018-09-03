var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// ******* FUNCTIONS MUST BE REFACTORED BASED ON QUERY NEEDS ******

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
var tableName = "burgers_db";

var orm = {
    // *** NOTE: IN ALL FOLLOWING, the variable 'querystring' is replaced by 's'

    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    selectAll: function (callback) {
        var s = "SELECT * FROM " + tableName;

        connection.query(s, function (err, result) {

            callback(result);

        });
    },

    // *****************************
    // COMPARE THE FOLLOWING TO THE addToDo CODE BELOW
    // insertOne: function (whatToSelect, table, orderCol) {
    //     var queryString = //"SELECT ?? FROM ?? ORDER BY ?? DESC";
    //         console.log(queryString);
    //     connection.query(queryString, //[whatToSelect, table, orderCol], 
    //         function (err, result) {
    //             if (err) throw err;
    //             console.log(result);
    //         });
    // },

    // *****************************
    // INSERT/MODIFY ORM-SEQUELIZE CODE HERE AND MODIFY
    insertOne: function (newBurger, callback) {
        var s = "INSERT INTO " + tableName + " (text, devoured) VALUES (?,?)";
        newBurger.devoured = newBurger.devoured || 0;
        connection.query(s, [
            newBurger.text, newBurger.devoured
        ], function (err, result) {

            callback(result);

        });
    },

    updateOne: function (burger, callback) {
        var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

        connection.query(s, [
            burger.text, burger.id
        ], function (err, result) {

            callback(result);

        });
    }
};

module.exports = orm;
