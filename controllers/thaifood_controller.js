var express = require("express");

var router = express.Router();

// Import the model (thaifood.js) to use its database functions.
var thaiFood = require("../models/thaifood.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  thaiFood.all(function(data) {
    var hbsObject = {
      food: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/thaifood", function(req, res) {
  thaiFood.create([
    "name", "Pad Thai"
  ], [
    req.body.name, req.body.padThai
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/thaifood/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  thaiFood.update({
    padThai: req.body.padThai
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/thaifood/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  thaiFood.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
