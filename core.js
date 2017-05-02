var App = angular.module("App", ["ngRoute"]);

App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'public/views/Homepage.html'
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
      }})
    .when('/profileCust', {
      templateUrl: 'public/views/CustomerProfile.html'
    })
    .when('/AllServices', {
      templateUrl: 'public/views/AllServices.html'
    })
    .when('/choose', {
      templateUrl: 'public/views/choosePackage.html'
    })
    .when('/AddPackage',{
      templateUrl: 'public/views/AddPackage.html'
    })
      .when('/BusinessPackages',{
        templateUrl: 'public/views/BusinessPackages.html'
      })
      .when('/ServiceDetails',{
        templateUrl: 'public/views/ServiceDetails.html'
      })
      .when('/delete',{
        templateUrl: 'public/views/delete.html'
      })
      .when('/update',{
        templateUrl: 'public/views/update.html'
      })
      .when('/sresults',{
           templateUrl: 'public/views/SResults.html',
           controller: 'SidebarCtrl'
       })
      .when('/RatingCtrl',
       { templateUrl: '/public/views/rating.html'
      })
       .when('/bookPackagedCtrl',
       { templateUrl: '/public/views/bookPackages.html'
      })
       .when('/booking',
        { templateUrl: '/public/views/booking.html' })

      .when('/ServiceProviders', {
        templateUrl: 'public/views/ServiceProviders.html',
        controller: 'AllClientCtrl'
      })
       .when('/writeReview', {
         templateUrl: 'public/views/writeReview.html'
       })
         .when('/Reviews',
          { templateUrl: 'public/views/Reviews.html'
        })
         .when('/ViewReq', {
          templateUrl: 'public/views/Requests.html'
          })
         .when('/logout', {
       templateUrl: 'public/views/Customerlogin.html'
     })
  .when('/pay', {
   templateUrl: 'public/views/payment.html',
   controller : 'StripeCtrl'
})
.when('/chat', {
  templateUrl: 'public/views/Chat.html',
  controller : 'SidebarCtrl'
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
