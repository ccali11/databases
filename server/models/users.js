var tableNames = require('../../orm-resources/orm-example');

module.exports = {
  getAll: function () {},
  create: function (username, callback) {
    tableNames.User.create({
      username: username
    })
      .then(() => {
        callback();
      })
      .catch((err) => { 'Error writing message to database: ', err; });
  }
};