App.controller("bookPackageController", function ($scope, $http, $location, $routeParams) {
    $scope.getPackageById($routeParams.id);
    $scope.onlyNumbers = /^\d+$/;
    $scope.formData = {};
    $scope.formData.booking_packageID= $scope.package.packageID;
    $scope.formData.booking_username = $scope.package.username;
    $scope.formData.date = "Today"
 
    $scope.processForm = function () {
        $http({
            method: 'POST',
            url: '/book',
            data: $.param($scope.formData), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        })
            App.success(function (data) {
                console.log(data);
            });
    };
});