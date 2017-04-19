var App = angular.module('App',['ngRoute']);

App.config(function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/',{
    templateUrl: '/public/Views/Homepage.html'
  })
  .when('/Customer',{
    templateUrl:'/public/Views/Customer.html'

  })
  .when('/ViewReq',{
    templateUrl:'/public/Views/Requests.html'

  })
  .when('/clientsignin',{
    templateUrl:'/public/Views/Requests.html'

  })

.when('/sresults',{
	 	templateUrl: 'public/Views/SResults.html'
	 });

});
