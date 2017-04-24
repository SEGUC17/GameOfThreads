App.controller('SidebarCtrl',function($scope,$location , SearchService){


$scope.ViewReq=function(){
    $location.url('/ViewReq');
  };
  $scope.Chat=function(){
    $location.url('/Chat');
  };



    $scope.Results= function(){
    var searchitem = SearchService.getSearchItem();

  SearchService.getSearchResults(searchitem).then(function(response){
  console.log(response.data);
  $scope.items = response.data;
  //$location.url('/search');

  });
};

/*function(){        .success(function(searchres){
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
