App.controller("NavCtrl", function($rootScope, $scope, $http, $location) {
  $scope.logout = function() {
    $http.post("/logout")
      .then(function() {
        $rootScope.currentUser = null;
        $location.url("/home");
      });
  }
});

App.controller("SignUpCtrl", function($scope, $http, $rootScope, $location) {
  $scope.signup = function(user) {

    // TODO: verify passwords are the same and notify user
    if (user.password == user.password2) {
      $http.post('/signup', user)
        .then(function(user) {
          $rootScope.currentUser = user;
          $location.url("/profile");
        });
    }
  }
});

App.controller("LoginCtrl", function($location, $scope, $http, $rootScope) {
  $scope.login = function(user) {
    $http.post('/login', user)
      .then(function(response) {
        $rootScope.currentUser = response;
        $location.url("/profile");
      });
  }
});
