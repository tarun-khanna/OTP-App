var smsCollection = require("./smsSchema");

var smsOperations = {
  storeSms: function(smsData, response) {
    let smsToSave = new smsCollection(smsData);
    smsToSave.save((err, doc) => {
      if (err) console.log(`Error while signing up user`, err.stack);
      else {
        console.log(`Saved SMS.. :-)`, doc);
      }
    });
  },
  getSmsList: function(response) {
    let smsList = smsCollection.find({}, (err, doc) => {
      if (err) {
        console.log("Error while fetching sms records from DB!!");
      } else {
        response.send({ data: doc });
      }
    });
  }
};

module.exports = smsOperations;
