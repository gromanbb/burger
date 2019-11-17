// Import MySQL connection
const connection = require("./connection.js");

// Object for all our SQL statement functions
const orm = {
  all: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  create: function(tableInput, name, cb) {
    let queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES ('" + name + "');";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function (tableInput, condition, cb) {
    let queryString = "UPDATE " + tableInput + " SET devoured = true WHERE id = " + condition + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export the orm object for the model (burgers.js)
module.exports = orm;
