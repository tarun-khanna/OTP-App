app.controller("chatsCtrl", function($scope, apiFactory) {
  apiFactory.getMessages().then(
    data => {
      console.log("messages received=", data);
      $scope.messages = data.data.data;
    },
    err => {
      console.log("err while fethcing messages");
    }
  );
});
