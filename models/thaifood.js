// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var thaiFood = {
  all: function(cb) {
    orm.all("food", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("food", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("food", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("food", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (thaifoodController.js).
module.exports = thaiFood;
