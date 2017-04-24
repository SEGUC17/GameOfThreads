App.controller('RequestCtrl',function($scope,$location,requestservice){
    $scope.ViewReq=function(){
    $locaton.url('/ViewReq');
    requestservice.getAllRequests().then(function(response){
      console.log(response.data);
});
}

});
