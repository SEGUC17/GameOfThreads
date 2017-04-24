App.controller('updateCtrl' , function($scope , $location , updateService){


$scope.updatethis= function(){
  var data = { oldServiceName: updateService.getServicename(),
          newdata :{ Service_Name: updateService.getNewServiceName() ,
                   Service_Description : updateService.getNewServiceDescription(),
                   Price : updateService.getNewPrice() }};
            console.log(data);
        updateService.UpdateServices(data).then(function(response){
        console.log(response.data);
        $location.url('/BusinessPackages');

  });
};
$scope.setServicename = function (value){
  updateService.setServicename(value);
};

$scope.setNewServiceName = function (value){
  updateService.setNewServiceName(value);
};
$scope.setNewServiceDescription = function (value){
  updateService.setNewServiceDescription(value);
};
$scope.setNewPrice = function (value){
  updateService.setNewPrice(value);
};
});
