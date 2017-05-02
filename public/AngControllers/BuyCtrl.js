
App.controller('BuyCtrl' , function($scope , $location , buyService){
//buyService
//$scope.chosen =  {Service_Name : "ay 7aga1" , Service_Description :" Des100" , Price: 2}
$scope.chosen =buyService.getChosen();


$scope.choose= function(){
  $location.url('/choose')
};

$scope.buy= function(){
  var servName = { Service_Name: buyService.getServiceName() };
console.log(servName);
    buyService.chooseService(servName).then(function(response){
      buyService.setChosen(response.data);
    console.log(response.data);
   //$scope.chosen = response.data;
    $location.url('/ServiceDetails');
  });
};

$scope.setServicename = function (value){
  buyService.setServiceName(value);
};

});
