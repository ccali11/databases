var models = require('../models');

module.exports = {
  get: function (req, res) {
    // read from req, what the user want
    let tableName = req.route.path.slice(1);
    models.messages.getAll(tableName, function (err, messages) {
      res.send(messages);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
