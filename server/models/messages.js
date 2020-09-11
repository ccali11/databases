// var db = require('../db');
var tableNames = require('../../orm-resources/orm-example');

module.exports = {
  getAll: function (tableName, callback) {
    tableNames.Message.findAll()
      .then(function (results) {
        callback(null, results);
      })
      .catch((err) => { console.log('Error has occured: ', err); });
    // a function which produces all the messages
    // db.dbConnection.connect();

    // db.dbConnection.query('SELECT * FROM messages', [], function(err, results) {
    //   if (err) {
    //     console.log('getAll Function: something happened, but it is an error');
    //   } else {
    //     callback(null, results);
    //   }
    // });
    // close the connection at the end of the function
  },
  // a function which can be used to insert a message into the database
  // User.create({username: 'Jean Valjean'})
  create: function (messageText, userName, roomName, callback) {
    tableNames.Message.create({
      username: userName,
      text: messageText,
      roomname: roomName
    })
      .then(() => {
        callback();
      })
      .catch((err) => { 'Error writing message to database: ', err; });



    // var queryString = `insert into messages value(${messageId}, '${messageText}', ${userId}, ${roomId}, '2020-09-11 04:00:01')`;

    // db.dbConnection.connect();
    // db.dbConnection.query(`insert into messages value(${messageId}, '${messageText}', ${userId}, ${roomId}, '2020-09-11 04:00:01', '2020-09-11 04:00:01')`, function(err, results) {
    //   if (err) {
    //     console.log('error occured at create', err);
    //   } else {
    //     callback();
    //   }
    // });
  }
};
