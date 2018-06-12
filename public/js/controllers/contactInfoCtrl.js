app.controller("contactInfoCtrl", function(
  $scope,
  ngDialog,
  $rootScope,
  $state
) {
  if (!$rootScope.selectedContact) {
    $state.go("home");
  }
});
