var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    // read from req, what the user want
    let tableName = req.route.path.slice(1);
    models.messages.getAll(tableName, function (err, messages) {
      res.send(messages);
    });
  },
  // a function which handles posting a message to the database
  post: function (req, res) {
    // Get message body from req object
    // console.log(req);
    // Get messageId, messageText, userId, roomId, createdAt, updatedAt from req and pass them into .create
    let {userId, text, roomId} = req.body;
    let currentTime = req._startTime;

    models.messages.create(2, text, userId, roomId, currentTime, function(err, messages) {
      res.send('OK');
    // Send a response based on callback in models.messages.post
    //});
    });
  }
};
