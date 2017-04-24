App.factory('deleteService',  function($http) {

    return {
      DeleteService : function(Service_Name) {
          return $http.post('/delete' , Service_Name);
      },

        setServiceName : function(value){
          this.ServiceName = value;
        },
        getServiceName: function(){
          return this.ServiceName;

    }
}
});
