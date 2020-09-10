var db = require('../db');

module.exports = {
  getAll: function (tableName, callback) {
    // a function which produces all the messages
    db.dbConnection.connect();
    db.dbConnection.query('SELECT * FROM messages', [], function(err, results) {
      if (err) {
        console.log('getAll Function: something happened, but it is an error');
      } else {
        callback(null, results);
      }
    });
  },
  create: function () {} // a function which can be used to insert a message into the database
};
