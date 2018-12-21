var express = require("express");
var router = express.Router();

//Import the model (burgers.js) to use its database functions.
var burger = require("../model/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };

        res.json(hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.insertOne(req.body, function(data) {
        res.json(data);
    });
});

router.put("/api/burger/:id", function(req, res) {
    var objCondition = {id: req.params.id}
    burger.updateOne(req.body, objCondition, function(data) {
        res.json(data);
    });
});

// Export routes for server.js to use.
module.exports = router;