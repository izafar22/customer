(function(){
    
    var customerFactory=function($http){
        
        return{
        
        getCustomers:function(){
            return $http.get('/customers');
        },
        
        getCustomer:function(customerId)
          { return $http.get('/orders/'+ customerId);}              
        
            
 }
    };
    
    customerFactory.$inject=['$http'];
    
    angular.module('myApp')
    .factory('customerFactory',customerFactory);
    
    
}());