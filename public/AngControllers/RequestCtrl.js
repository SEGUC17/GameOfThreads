App.controller('RequestCtrl',function($scope,$location,requestservice){
    $scope.ViewReq=function(){
    $locaton.url('/ViewReq');
    requestservice.getAllRequestsn().success(function(){
});
};

});
