var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, tableInput, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (whatToSelect, table, //orderCol
        ){
        var queryString = //"SELECT ?? FROM ?? ORDER BY ?? DESC";
            console.log(queryString);
        connection.query(queryString, //[whatToSelect, table, orderCol], 
            function (err, result) {
                if (err) throw err;
                console.log(result);
            });
    },
    updateOne: function (//tableOneCol, tableTwoForeignKey, tableOne, tableTwo
            ) {
        var queryString =
            //"SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(
            queryString,
            //[tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;
