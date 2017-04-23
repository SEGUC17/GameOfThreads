App.controller('SearchCtrl', function($scope, $location, SearchService){
	console.log('entered search ctrl');

	$scope.Results= function(){


		
	var searchitem = SearchService.getSearchItem();

  SearchService.getSearchResults(searchitem).then(function(searchitem){
  console.log(searchitem);
  $location.url('/search');

  });
};
		
/*function(){		.success(function(searchres){
			//$scope.SearchResults = searchres;
			$scope.arrayOfNames = [];

			for (var i = 0; i < searchres.length; i++) {
				$scope.arrayOfNames = $scope.arrayOfNames + searchres[i].local.Buisness_name;
			}
		});
	};*/
	$scope.setSearchItem = function(searchBox){
		console.log('set search item');
		SearchService.setSearchItem(searchBox);
	}


	$scope.go = function(){
		console.log('entered go');
		$location.url('/sresults');
	};
});
