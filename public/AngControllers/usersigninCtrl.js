


 App.controller ('usersigninCtrl',function($scope ,  $location, usersigninService) {
  $scope.login = function(){


usersigninService.login(user).success(function(){
  $location.url('/userprofile');
});



}



});