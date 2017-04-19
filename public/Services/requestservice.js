App.factory('requestservice',function($http){
  return{
    getAllRequests: function(){
      return $http.get('/requests');
    }
  }
});
