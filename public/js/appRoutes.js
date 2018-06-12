app.config(function($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider.when("", "/page1");
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "index.html"
    })
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
    })
    .state("sendMessage", {
      url: "/sendMessage",
      templateUrl: "sendMessage.html"
    });
});
