App.factory('ratingService',function($http){
  return{
    getMyRating: function(){
      return $http.get('/rating');
    }
  }
});
