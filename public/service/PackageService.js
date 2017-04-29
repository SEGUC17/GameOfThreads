App.factory('PackageService',  function($http) {

    return {

      viewMyServices : function() {
          return $http.get('/BusinessPackages');
      },
      getAllServices : function() {
          return $http.get('/Packages');
      },
      getMyServices : function() {
          return this.services;
      },
      setMyServices : function(value) {
           this.services = value;
      },

        setServiceName : function(value){
          this.ServiceName = value;
        },
        getServiceName: function(){
          return this.ServiceName;
        },
        setServiceDescription : function(value){
          this.ServiceDescription = value;
        },
        getServiceDescription: function(){
          return this.ServiceDescription;
        },
        SetPrice : function(value){
          this.Price = value;
        },
        getPrice: function(){
          return this.Price ;
        },
        setemail : function(value){
          this.email = value;
        },
        getemail: function(){
          return this.email;
        },
                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        postMyService : function(service) {
            return $http.post('/service', service);
        }
    }

});
