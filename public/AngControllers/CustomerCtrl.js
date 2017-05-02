App.controller("NavCtrlCust", function($rootScope, $scope, $http, $location) {
  $scope.logout = function() {
    $http.post("/logout")
      .then(function() {
        $rootScope.currentCust = null;
        $location.url("/");
      });  }
    });
App.controller("SignUpCtrlCust", function($scope, $http, $rootScope, $location) {
  $scope.signupC = function(customer) {

  // TODO: verify passwords are the same and notify user
    if (customer.password == customer.password2) {
      $http.post('/signupCust', customer)
        .then(function(customer) {
          $rootScope.currentCust = customer;
          $location.url("/profileCust");
        });
    }
  }
});

App.controller("LoginCtrlCust", function($location, $scope, $http, $rootScope) {
  $scope.loginC = function(customer) {
    $http.post('/loginCust', customer)
      .then(function(response) {
        $rootScope.currentCust = response;
        $location.url("/profileCust");
      });
  }
});
