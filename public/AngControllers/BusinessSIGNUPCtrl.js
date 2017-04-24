App.controller("BusinessSIGNUPCtrl", function($scope, $http, $rootScope, $location) {
  $scope.signup = function(user) {

    // TODO: verify passwords are the same and notify user
    if (user.password == user.password2) {
      $http.post('/signup', user)
        .then(function(user) {
          $rootScope.currentUser = user;
          console.log(user);
          $location.url("/BusinessProfile");
        });
    }
  }
});
