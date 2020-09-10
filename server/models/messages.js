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
    // close the connection at the end of the function
  },
  // a function which can be used to insert a message into the database
  create: function (messageId, messageText, userId, roomId, createdAt, callback) {
    var queryString = `insert into messages value(${messageId}, '${messageText}', ${userId}, ${roomId}, '2020-09-11 04:00:01')`;
    // YYYY-MM-DD HH:MM:SS
    console.log(queryString);
    db.dbConnection.connect();
    db.dbConnection.query(`insert into messages value(${messageId}, '${messageText}', ${userId}, ${roomId}, '2020-09-11 04:00:01', '2020-09-11 04:00:01')`, function(err, results) {
      if (err) {
        console.log('error occured at create', err);
      } else {
        callback();
      }
    });
  }
};
