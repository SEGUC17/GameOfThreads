

 App.controller ('usersignupCtrl',function($scope ,  $location, usersignupService) {
  $scope.Submit = function(){



usersignupService.createCust().success(function(){
  $location.path('/userprofile');
});



}



});

