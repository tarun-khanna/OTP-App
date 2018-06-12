app.controller("sendMessageCtrl", function(
  $scope,
  apiFactory,
  $rootScope,
  $state
) {
  if (!$rootScope.selectedContact) {
    $state.go("home");
  }
  $scope.OTP = Math.floor(Math.random() * (999999 - 100000) + 100000);
  $scope.message = `Hi. Your OTP is: ${$scope.OTP}`;
  $scope.sendMessage = function() {
    let sms = {
      to:
        $rootScope.selectedContact.firstName +
        "  " +
        $rootScope.selectedContact.lastName,
      text: $scope.message,
      timeStamp: new Date(),
      phone: $rootScope.selectedContact.phone
    };
    apiFactory.sendMessage(sms).then(
      data => {
        console.log("message sent success");
        $state.go("contacts");
        alert("Message sent successfully!!");
      },
      err => {
        console.log("error while sending message");
      }
    );
  };
});
