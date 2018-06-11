app.controller("contactInfoCtrl", function($scope, ngDialog, $rootScope) {
  console.log("selected contact=", $rootScope.selectedContact);

  $scope.sendMessage = function() {
    ngDialog.open({
      template: "sendMessage.html",
      className: "ngdialog-theme-default"
    });
  };
});
