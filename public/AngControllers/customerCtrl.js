
 App.controller ('customerCtrl',function($scope ,  $location) {
  $scope.signup = function(){
  $location.url('/usersignup');
}
 $scope.signin = function(){
  $location.url('/usersignin');
}
 $scope.fb = function(){
  $location.url('/userfacebook');
}



});


