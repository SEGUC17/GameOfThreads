
var App = angular.module('App',['ngRoute']);

  App.config(function($routeProvider){  
 
 $routeProvider   
 
 .when('/',{ 

   templateUrl: 'public/Views/Homepage.html'  
    
    })

  .when("/customer", {
    templateUrl : 'public/Views/customer.html',
        controller : "customerCtrl"
  })  
  
  .when("/usersignup", {
    templateUrl : 'public/Views/usersignup.html',
        controller : "usersignupCtrl"
  })  
    

  .when("/usersignin", {
    templateUrl : 'public/Views/usersignin.html',
        controller : "usersigninCtrl"
  })  
    



  .when("/userfacebook", {
    templateUrl : 'public/Views/userfacebook.html',
        controller : "userfacebookCtrl"

 

  })  
    

  .when("/userprofile", {
    templateUrl : 'public/Views/userprofile.html',
        controller : "userprofileCtrl"
  })  

  .when("/Homepage", {
    templateUrl : 'public/Views/Homepage.html',
        controller : "HomepageCtrl"
  })  
    
    
    
     });



