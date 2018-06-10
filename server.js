const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/hi", (request, response) => {
  console.log("hi recieved..");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server start on port....", port);
});
