var models = require('../models');

module.exports = {
  get: function (req, res) {
    // read from req, what the user want
    let tableName = req.route.path.slice(1);
    models.messages.getAll(tableName, function (err, messages) {
      res.send(messages);
    });
  },
  post: function (req, res) {
    let {userId, text, roomId} = req.body;
    let currentTime = req._startTime;

    models.messages.create(2, text, userId, roomId, currentTime, function(err, messages) {
      res.send('OK');
    });
  }
};