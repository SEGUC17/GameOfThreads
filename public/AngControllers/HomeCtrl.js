App.controller('HomeCtrl' ,function($scope , $location){

//login as BusinessProvider
  $scope.Busineslogin = function(){
    $location.url('/BusinessLogin')

  }
  //login as Customer of the page
  $scope.Customerlogin = function(){
    $location.url('/Customerlogin')

  }



})
