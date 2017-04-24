



//  App.controller ('HomeCtrl',function($scope ,  $location) {
//   $scope.customer = function(){
//   $location.url('/customer');
// };
// $scope.business = function(){
//   $location.url('/clientsignin');
// };



// });

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
