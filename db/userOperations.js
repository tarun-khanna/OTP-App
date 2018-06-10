var users = require("./userSchema");

var userOperations = {
  findUser: function(user) {
    return users.find({}, function(err, doc) {
      if (err) {
        console.log("error finding user in database");
      } else if (doc) {
        console.log("user founded...");
      }
    });
  },
  createUser: function(newUser, response) {
    let userToSave = new users(newUser);
    userToSave.save((err, doc) => {
      if (err) console.log(`Error while signing up user`, err.stack);
      else {
        console.log(`Registered User.. :-)`, doc);
      }
    });
  }
};

module.exports = userOperations;
