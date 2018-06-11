app.factory("apiFactory", function($q, $http) {
  return {
    getMessages: function() {
      let deferredObj = $q.defer();
      $http.get("/getSms").then(
        data => {
          deferredObj.resolve(data);
        },
        err => {
          deferredObj.reject(err);
        }
      );
      return deferredObj.promise;
    },
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
