var App = angular.module('App',['ngRoute']);

App.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'public/Views/Homepage.html'
  })
  .when('/client',{
    templateUrl: 'public/Views/BusinessLogin.html'
  })
  .when('/BusinessRegister',{
    templateUrl: 'public/Views/BusinessRegister.html'
  })
  .when('/BusinessProfile',{
    templateUrl: 'public/Views/BusinessProfile.html'
  });


});
