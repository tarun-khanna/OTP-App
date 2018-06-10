app.config(function($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider.when("", "/page1");
  $stateProvider
    .state("contacts", {
      url: "/contacts",
      templateUrl: "contacts.html"
    })
    .state("contactInfo", {
      url: "/contactInfo",
      templateUrl: "contactInfo.html"
    })
    .state("chats", {
      url: "/chats",
      templateUrl: "chats.html"
    });
});