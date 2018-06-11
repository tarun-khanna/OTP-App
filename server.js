const smsDB = require("./db/smsOperations");
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

app.post("/sendSms", (request, response) => {
  console.log("message recieved..", request.body.sms);
  let sms = request.body.sms;
  client.messages
    .create({
      from: "+13343778395",
      to: sms.phone,
      body: sms.text
    })
    .then(message => {
      smsDB.storeSms(sms);
      console.log("message.sid=", message.sid);
      response.send(message.sid);
    });
});

app.get("/getSms", (request, response) => {
  smsDB.getSms(response);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server start on port....", port);
});
