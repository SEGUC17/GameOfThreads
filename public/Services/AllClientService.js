App.factory('AllClientService', function($http){
	return {
		getAllClients : function(){
			return $http.get('/viewAllClients');
		}

	};
});
