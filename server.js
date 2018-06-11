const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const cred = require("./credentials");
const TWILIO_ACCOUNT_SID = cred.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = cred.TWILIO_AUTH_TOKEN;

var client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/sendMessage", (request, response) => {
  console.log("message recieved..", request.body.message);
  let OTP = Math.floor(Math.random() * (999999 - 100000) + 100000);
  client.messages
    .create({
      from: "+18317048607",
      to: "+917042466206",
      body: `Hi. Your OTP is: ${OTP}. the message is ${request.body.message}`
    })
    .then(message => {
      console.log("message.sid=", message.sid);
      response.send(message.sid);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server start on port....", port);
});
