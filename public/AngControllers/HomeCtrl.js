App.controller('HomeCtrl',function($scope,$location){
  $scope.customer=function(){
    $location.url('/Customer');
  };
  $scope.business=function(){
    $location.url('/clientsignin');
  };

});
