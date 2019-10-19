// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", name, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
