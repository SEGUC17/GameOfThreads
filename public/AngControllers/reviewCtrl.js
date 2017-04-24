App.controller('reviewCtrl' , function($scope , $location , reviewService){

  $scope.AllReviews = reviewService.getAllReviews();

$scope.postReview= function(){
  var review = { Business_Name: reviewService.getBusinessName() ,
                 Review: reviewService.getReview()};
  console.log(review);
  reviewService.writeReview(review).then(function(response){
    console.log(response.data + "   data");
    //$scope.rev=response.data
    //reviewService.setAllReviews(response.data);
  $location.url('/CustomerProfile');

  });
};

$scope.setBusinessName = function (value){
  reviewService.setBusinessName(value);
};
$scope.setReview = function (value){
  reviewService.setReview(value);
};

$scope.viewReview= function(){
  reviewService.viewAllReviews().then(function(response){
  reviewService.setAllReviews(response.data);
  console.log(response.data);
  $location.url('/Reviews');

  });
};

});
