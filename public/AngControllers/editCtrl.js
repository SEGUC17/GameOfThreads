App.controller('editCtrl' , function( $scope , $location){


$scope.delete= function(){
$location.url('/delete');
},

$scope.update= function(){
$location.url('/update');
}
});
