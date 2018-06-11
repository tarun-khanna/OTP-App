const connection = require("./connection");

var Schema = connection.Schema;

var smsSchema = new Schema({
  to: String,
  phone: Number,
  text: String,
  date: Date
});
var smsModel = connection.model("smsCollection", userSchema);

module.exports = smsModel;
