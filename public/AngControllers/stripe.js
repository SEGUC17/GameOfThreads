angular.module('stripe', ['angularPayments'])
(function()){
	angular.module('stripe').config(function($window) {
    $window.Stripe.setPublishableKey('pk_test_gjpuC15pXA1rt5N6N7bfk8bU');
    // Stripe Response Handler
$scope.stripeCallback = function (code, result) {
    if (result.error) {
        window.alert('it failed! error: ' + result.error.message);
    } else {
        window.alert('success! token: ' + result.id);
    }
};
});
}
