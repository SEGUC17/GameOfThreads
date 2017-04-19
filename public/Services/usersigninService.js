
App.factory('usersigninService', function($http){
	return{
		
		login : function(user){
			return $http.post('/loginCust',user)
		}
	}
})