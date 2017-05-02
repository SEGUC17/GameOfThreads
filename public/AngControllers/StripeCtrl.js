App.controller('StripeCtrl',function($scope,$location)
{

  $scope.buynow=function(){
      $location.url('/pay');
    };
    
});
