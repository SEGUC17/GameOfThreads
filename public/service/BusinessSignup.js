// public/js/services/NerdService.js
angular.module('BusinessSignup', []).factory('signup', ['$http', function($http) {

    return {
        // call to get all nerds
        post : function() {
            return $http.get('/app/Controller/passport');
        }

    }

}]);
