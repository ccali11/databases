var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    let {username} = req.body;
    console.log(username);
    models.users.create(username, function(err) {
      res.send('OK');
    });
  }
};