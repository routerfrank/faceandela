//modules
angular.module('faceandela.controllers', []);
angular.module('faceandela.directives', []);
angular.module('faceandela.services', ['firebase','ngCookies']);


//directives
require("./js/directives/header.js");

//services
require("./js/services/authentication.js");

//controllers
require("./js/controllers/main.js");

//filters


window.FaceAndela = angular.module("FaceAndela", [
  'faceandela.controllers',
  'faceandela.services',
  'faceandela.directives',
  'ui.router',
  'ngMaterial',
  'btford.markdown',
]);

FaceAndela.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
	$rootScope._ = window._;
	$rootScope.$state = $state
	$rootScope.$stateParams = $stateParams;
}])

FaceAndela.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "main.html"
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "pages/profile.html"
    })
}])

FaceAndela.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan', {
      'default': '400', 
      'hue-1': '100', 
      'hue-2': '600', 
      'hue-3': 'A100' 
    })
    .warnPalette('light-blue', {
      'default': '50'
    });
});
