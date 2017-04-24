

var App = angular.module('App',['ngRoute']);

  App.config(function($routeProvider){  
 
 $routeProvider   
 
 .when('/',{ 

   templateUrl: 'public/Views/Homepage.html'  
    
    })

 

  .when("/Homepage", {
    templateUrl : 'public/Views/Homepage.html',
        controller : "HomepageCtrl"
  })  
    
  .when('/ServiceProviders', {
    templateUrl: 'public/Views/ServiceProviders.html',
    controller: 'AllClientCtrl'
   })
    
    

    .when('/BusinessLogin', {
      templateUrl: 'public/views/BusinessLogin.html',
      controller: 'LoginCtrl'
    })
    .when('/BusinessRegister', {
      templateUrl: 'public/views/BusinessRegister.html'
    })
    .when('/Customerlogin', {
      templateUrl: 'public/views/Customerlogin.html' ,
      controller: 'LoginCtrlCust'
    })
    .when('/CustomerRegister', {
      templateUrl: 'public/views/CustomerRegister.html'

    })
    .when('/profile', {
      templateUrl: 'public/views/BusinessProfile.html',
     resolve: {
        logincheck: checkLoggedin
      }
    })
    .when('/profileCust', {
      templateUrl: 'public/views/CustomerProfile.html'
    })
    .when('/AddPackage',{
      templateUrl: 'public/views/AddPackage.html'
    })
      .when('/BusinessPackages',{
        templateUrl: 'public/views/BusinessPackages.html'

      })
    .otherwise({
      redirectTo: '/'
    });
});


var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/loggedin').then(function(user) {
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/BusinessLogin');
    }
  });
  return deferred.promise;
}
