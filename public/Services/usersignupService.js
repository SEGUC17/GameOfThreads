

App.factory('usersignupService', function($http){ 

return{
	createCust :function(){
		return $http.get ('/route');
	}
}
 
});