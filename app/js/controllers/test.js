angular.module("faceandela.controllers")
	.controller("mainCtrl", ['$firebase', '$rootScope', '$cookies', '$scope', '$state', 'Auth', function($firebase, $rootScope, $cookies, $scope, $state, Auth){
    var baseRef = new Firebase($cookies.rootRef);
    var userRef = baseRef.child('users');
    $rootScope.currentUser = null;
    
		$scope.login = function(){
			Auth.login()
		}

		$scope.logout = function(){
			Auth.logout()
      $rootScope.currentUser = null;
		}

    baseRef.onAuth(function(authData) {
      Auth.auth(authData, function(user) {
        console.log(user);
        $rootScope.currentUser = user;
      });
    });


    $scope.menu = false;
    $scope.search = false;
    $scope.toggleMenu = function() {
        $scope.menu = $scope.menu === true ? false: true;
        $scope.search = false;
    };
    $scope.toggleSearch = function() {
        $scope.search = $scope.search === true ? false: true;
        $scope.menu = false;
    };

	}]);