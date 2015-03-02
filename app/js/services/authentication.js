angular.module("faceandela.services")
	.factory("Auth", ['$firebase', '$rootScope', '$state', '$cookies', function($firebase, $rootScope, $state, $cookies){
		var baseRef = new Firebase($cookies.rootRef);
		var userRef = baseRef.child('users');


		return {
			login: function() {
       baseRef.authWithOAuthPopup("google", function(error, authData) {
				  if (error) {
				    console.log("Login Failed!", error);
				  } else {
				    console.log("Authenticated successfully with payload:", authData);
				  }
				});
			},
			logout:function(){
				baseRef.unauth(function(){
					console.log("user logged out")
				});
			},
			auth:function(authData, cb){
				// we would probably save a profile when we register new users on our site
				// we could also read the profile to see if it's null
				// here we will just simulate this with an isNewUser boolean
				var isNewUser = true;		
				// console.log(authData)
			  if (authData && isNewUser) {
			    var user = userObject(authData);
			    userRef.child(authData.uid).set(user);
          return cb(user);
			  }
			}
		}

		function userObject(authData){
			return{
				uid:authData.uid,
				accessToken:authData.google.accessToken,
				displayName:authData.google.displayName,
				pictureUrl:authData.google.cachedUserProfile.picture,
				gender:authData.google.cachedUserProfile.gender,
				provider:authData.provider
			}
		}
	}])