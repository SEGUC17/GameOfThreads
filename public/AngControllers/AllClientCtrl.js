


App.controller('AllClientCtrl', function($scope, $location, AllClientService){
	

	$scope.viewClients = function(){

  AllClientService.getAllClients().then(function(response){
  	console.log('entered allclient ctrl');
console.log(response.data);
  $location.url('/ServiceProviders');

  });
};
///////if a button is created
	// $scope.Clients = function(){
	// 	console.log('entered viewClients');
	// 	$location.url('/allclients');
	// };
})



