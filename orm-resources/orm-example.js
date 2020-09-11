
var Sequelize = require('sequelize');
var db = new Sequelize('chatter', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('User', {
  userid: Sequelize.INTEGER,
  username: Sequelize.STRING
}, {
  timestamps: false
});

var Message = db.define('Message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  timestamps: false
});

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
db.sync();

module.exports = {
  User: User,
  Message: Message
};
// .then(function() {
//   // Now instantiate an object and save it:
//   return User.create({username: 'Jean Valjean'});
// })
// .then(function() {
//   // Retrieve objects from the database:
//   return User.findAll({ where: {username: 'Jean Valjean'} });
// })
// .then(function(users) {
//   users.forEach(function(user) {
//     console.log(user.username + ' exists');
//   });
//   db.close();
// })
// .catch(function(err) {
//   // Handle any error in the chain
//   console.error(err);
//   db.close();
// });
