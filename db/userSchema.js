const connection = require("./connection");

var Schema = connection.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  address: String,
  phone: Number,
  password: String
});
var userModel = connection.model("users", userSchema);

module.exports = userModel;
