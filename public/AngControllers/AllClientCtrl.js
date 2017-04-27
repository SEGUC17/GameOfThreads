
App.controller('AllClientCtrl', function($scope, $location, AllClientService){
	  $scope.viewClients = function(){
    AllClientService.getAllClients().then(function(response){
  	console.log('entered allclient ctrl');
    console.log(response.data);
	  $scope.myClients=response.data
    $location.url('/ServiceProviders');

  });
};
});
