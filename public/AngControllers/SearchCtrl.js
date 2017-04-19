App.controller('SearchController', function($scope, SearchSrv){
	console.log('entered ctrl');

	$scope.returnRes = function(){
		SearchSrv.getSearchResults().success(function(searchres){
			//$scope.SearchResults = searchres;
			$scope.arrayOfNames = [];

			for (var i = 0; i < searchres.length; i++) {
				$scope.arrayOfNames = $scope.arrayOfNames + searchres[i].local.Buisness_name;
			}
		});
	};

	$scope.go = function(){
		$location.url('/sresults');
	};
});