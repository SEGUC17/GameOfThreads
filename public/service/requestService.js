App.factory('requestService' , function($http){
  return {
    getAllRequests : function (){
      return $http.get('/requests');
    }
  }
});
