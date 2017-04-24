App.factory('reviewService',  function($http) {

    return {
      viewAllReviews : function() {
          return $http.get('/allReviews');
      },
      writeReview : function(review) {
          return $http.post('/reviews' , review);
      },

        setBusinessName : function(value){
          this.BusinessName = value;
        },
        getBusinessName: function(){
          return this.BusinessName;

    },
    getAllReviews : function() {
        return this.reviews;
    },
    setAllReviews : function(value) {
         this.reviews = value;
    },

            setReview : function(value){
              this.Review = value;
            },
            getReview: function(){
              return this.Review;

        }
}
});
