app.controller("sendMessageCtrl", function($scope, apiFactory) {
  console.log("controller initialized");
  $scope.sendMessage = function() {
    apiFactory.sendMessage($scope.message).then(
      data => {
        console.log("message sent success");
      },
      err => {
        console.log("error while sending message");
      }
    );
  };
});
