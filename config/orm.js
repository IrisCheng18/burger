var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        connection.query('SELECT * FROM ??;', [tableName], function (err, data) {
            if (err) throw err;

            cb(data);
        });
    },
    insertOne: function (tableName, objColVals, cb) {
        connection.query('INSERT INTO ?? SET ?', [tableName, objColVals], function (err, data) {
            if (err) throw err;

            cb(data);
        });
    },
    updateOne: function (tableName, objColVals, objCondition, cb) {
        connection.query('UPDATE ?? SET ? WHERE ?', [tableName, objColVals, objCondition], function(err, data) {
            if (err) throw err;

            cb(data);
        });
    }
};

// orm.selectAll("burgers", function(data) {
//     console.log(data);
// });
// orm.insertOne("burgers", {burger_name: "double cheeseburger", devoured: false}, function(data) {
//     console.log(data);
// });
// orm.updateOne("burgers", {burger_name: "Fish", devoured: true}, {id: 5}, function(data) {
//     console.log(data);
// });

// Export the orm object for the model (burger.js).
module.exports = orm;