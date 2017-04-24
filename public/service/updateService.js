App.factory('updateService',  function($http) {

    return {
      UpdateServices : function(service) {
          return $http.post('/update' , service);
      },
        setServicename : function(value){
          this.Servicename = value;
        },
        getServicename: function(){
          return this.Servicename;
    },
    setNewServiceName : function(value){
      this.NewServiceName = value;
    },
    getNewServiceName: function(){
      return this.NewServiceName;
    },
    setNewServiceDescription : function(value){
      this.NewServiceDescription = value;
    },
    getNewServiceDescription: function(){
      return this.NewServiceDescription;
    },
    setNewPrice : function(value){
      this.NewPrice = value;
    },
    getNewPrice : function(){
      return this.NewPrice ;
    }
}
});
