angular.module("faceandela.services")
  .factory("Article", ['$firebase', '$rootScope', '$state', '$cookies', function($firebase, $rootScope, $state, $cookies){
    var baseRef = new Firebase($cookies.rootRef);

    return {
      
    }
  }])