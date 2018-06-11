app.controller("contactsCtrl", function($http, $scope, $rootScope) {
  $http
    .get(
      "https://raw.githubusercontent.com/tarunraj95/Json_data/master/contacts.json"
    )
    .then(
      data => {
        $scope.contacts = data.data;
      },
      err => {
        console.log("There was an error while fetching the contacts");
      }
    );

  $scope.openContact = function(index) {
    $rootScope.selectedContact = $scope.contacts[index];
  };
});
