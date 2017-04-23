App.controller("BusinessloginCtrl", function($location, $scope, $http, $rootScope) {
  $scope.login = function(user) {
    $http.post('/login', user)
      .then(function(user) {
        console.log(user);
        $rootScope.currentUser = user;
        $location.url("/BusinessProfile");
      });
  }
});
