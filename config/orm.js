var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        connection.query('SELECT * FROM ??;', [tableName], function (err, data) {
            if (err) throw err;

            cb(data);
        });
    },
    insertOne: function (tableName, objVals, cb) {
        connection.query('INSERT INTO ?? SET ?', [tableName, objVals], function (err, data) {
            if (err) throw err;

            cb(data);
        });
    },
    updateOne: function (tableName, objVals, objCondition, cb) {
        connection.query('UPDATE ?? SET ? WHERE ?', [tableName, objVals, objCondition], function(err, data) {
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

module.exports = orm;