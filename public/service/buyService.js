App.factory('buyService',  function($http) {

    return {

      chooseService : function(Service_Name) {
          return $http.post('/buy' , Service_Name);
      },

      setServiceName : function(value){
        this.ServiceName = value;
      },
      getServiceName: function(){
        return this.ServiceName;

  },
  getChosen : function() {
      return this.chosen;
  },
  setChosen : function(value) {
       this.chosen = value;
  }
  }

});
