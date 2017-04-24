App.controller('deleteCtrl' , function($scope , $location , deleteService){


$scope.deletethis= function(){
  var sName = { Service_Name: deleteService.getServiceName() };
console.log(sName);
  deleteService.DeleteService(sName).then(function(response){
  console.log(response.data);
  $location.url('/BusinessPackages');

  });
};

$scope.setServicename = function (value){
  deleteService.setServiceName(value);
};
});
