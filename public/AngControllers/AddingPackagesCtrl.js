App.controller('AddingPackagesCtrl' , function($scope , $location , PackageService){

  $scope.test = [ {Service_Name : "ay 7aga1" , Service_Description :" Des100" , Price: 2} ,
  {Service_Name : "ay 7aga 2" , Price : 5}]

$scope.Services = PackageService.getMyServices();


$scope.adding= function(){
  var service = { Service_Name: PackageService.getServiceName() ,
                 Service_Description : PackageService.getServiceDescription(),
                 Price : PackageService.getPrice(),
                 email :PackageService.getemail() };

PackageService.postMyService(service).then(function(response){
  console.log("Request  Successful");
  PackageService.setMyServices(response.data);
  $location.url('/BusinessPackages');

  //$scope.services = services;
})

/*
  $http({
      method: 'POST',
      url: '/service',
      data: ($scope.Services), // pass in data as strings
  })
      .success(function (data) {
        console.log("adding ctrl rendring");
          $location.path("/BusinessPackages");
      });
*/};

$scope.addNew= function(){
  $location.url('/AddPackage');
};

$scope.setServicename = function (value){
  PackageService.setServiceName(value);
};
$scope.setServicedescription = function (value){
  PackageService.setServiceDescription(value);
};
$scope.setprice = function (value){
  PackageService.SetPrice(value);
};
$scope.setemail = function (value){
  PackageService.setemail(value);
};

$scope.view= function(){
//$scope.service = PackageService.query();

  PackageService.viewMyServices().then(function(response){
  PackageService.setMyServices(response.data);
  console.log(response.data);
  $location.url('/BusinessPackages');

  });
};
});
