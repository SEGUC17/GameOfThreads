App.factory('SearchService', function($http){
	return {
		getSearchResults : function(searchitem){
			return $http.get('/search?search=' + searchitem);
		},

		setSearchItem: function(value){
			this.searchitem = value;
		},

		getSearchItem: function(){
			return this.searchitem;
		}
	};
});