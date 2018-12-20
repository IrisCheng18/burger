// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(data) {
            cb(data);
        });
    },
    insertOne: function(objColVals, cb) {
        orm.insertOne("burgers", objColVals, function(data) {
            cb(data);
        });
    },
    updateOne: function(objColVals, objCondition, cb) {
        orm.updateOne("burgers", objColVals, objCondition, function(data) {
            cb(data);
        });
    }
};

// burger.selectAll(function(data) {
//     console.log(data);
// });
// burger.insertOne({burger_name: "double bacon cheeseburger", devoured: true}, function(data) {
//     console.log(data);
// });
// burger.updateOne({burger_name: "cheeseburger", devoured: true}, {id : 4}, function(data) {
//     console.log(data);
// });


// Export the database functions for the controller(burgers_controller.js).
module.exports = burger;