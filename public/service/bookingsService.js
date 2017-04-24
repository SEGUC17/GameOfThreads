App.factory('requestbooking',function($http){
  return{
    getMybooking: function(){
      return $http.get('/booking');
    }
  }
});