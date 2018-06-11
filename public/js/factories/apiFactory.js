app.factory("apiFactory", function($q, $http) {
  return {
    getData: function() {},
    sendMessage: function(message) {
      let deferredObj = $q.defer();
      console.log("message recieved in factory=", message);
      $http.post("/sendMessage", { message }).then(
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
