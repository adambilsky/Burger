// This is the MODEL, which we IMPORT from the ORM (orm.js)
var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.all("burgers", function (result) {
            callback(result);
        });
    },
    create: function (columns, values, callback) {
        orm.create("burgers", columns, values, function (result) {
            callback(result);
        });
    },
    update: function (objColumnValues, condition, callback) {
        orm.update("burgers", objColumnValues, condition, function (result) {
            callback(result);
        });
    }
};

// Export functions for the CONTROLLER (burgers_controller.js)
module.exports = burger;