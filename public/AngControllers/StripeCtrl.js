App.controller('StripeCtrl',function($scope,$location , requestService , SearchService)
{

  $scope.buy=function(){
      $location.url('/payment');
    };
// Stripe Response Handler
       $scope.stripeCallback = function (code, result) {
         console.log(result);
          if (result.error) {
            window.alert('it failed! error: ' + result.error.message);
          } else {


  // Simple POST request example (passing data) :
    $http.post('/charge', result)
    .success(function(data, status, headers, config) {
      alert(data);
    })
    .error(function(data, status, headers, config) {
      alert(data);
    });
      }
  };
});
