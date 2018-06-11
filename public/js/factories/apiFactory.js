app.factory("apiFactory", function($q, $http) {
  return {
    getData: function() {},
    sendMessage: function(sms) {
      let deferredObj = $q.defer();
      console.log("sms recieved in factory=", sms);
      $http.post("/sendSms", { sms }).then(
        data => {
          deferredObj.resolve(data);
        },
        err => {
          deferredObj.reject(err);
        }
      );
      return deferredObj.promise;
    }
  };
});
