let connection = require("../config/connection.js");

let orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, value, cb) {
      var queryString = "INSERT INTO " + table + " SET ?";
      connection.query(queryString, value, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    update: function(table, condition, id, cb) {
      var queryString = "UPDATE " + table + " SET devoured = true WHERE id = ?";
    connection.query(queryString, id, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
  
 
  module.exports = orm;
  