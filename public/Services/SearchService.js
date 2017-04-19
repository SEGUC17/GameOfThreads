App.factory('SearchSrv', function($http){
	return {
		getSearchResults : function(){
			return $http.get('/search');
		}
	};
});