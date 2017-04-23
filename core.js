var App = angular.module('App', ['ngRoute']);
App.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider 

	 .when('/',{    

	 	templateUrl: 'public/Views/Homepage.html'

	  })

	 .when('/BusinessLogin', {
	 	templateUrl: 'public/Views/BusinessLogin.html'
	 })

	 //view clients
	 .when('/allclients', {
	 	templateUrl: 'public/Views/ServiceProviders.html',
	 	controller: 'AllClientCtrl'
	 })

	 .when('/sresults',{
	 	templateUrl: 'public/Views/SResults.html',
	 	controller: 'SearchCtrl'
	 });
});

/*<p ng-repeat = "name in returnRes()" >
	<a id="link-1" href ng-click="value = 1">link 1</a> (link, don't reload)<br />
	Name: {{ name }}
</p>

ng-init = "returnRes()"
*/