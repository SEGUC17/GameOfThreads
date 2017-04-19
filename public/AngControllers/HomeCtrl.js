



 App.controller ('HomeCtrl',function($scope ,  $location) {
  $scope.customer = function(){
  $location.url('/customer');
};
$scope.business = function(){
  $location.url('/clientsignin');
};



});

