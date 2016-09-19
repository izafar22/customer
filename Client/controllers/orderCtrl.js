(function(){
    
    var orderCtrl = function($scope,$routeParams,customerFactory){
        
        var customerId =$routeParams.customerId;
        $scope.customer=null;
        
           function init(){
            customerFactory.getCustomer(customerId)
            .success(function(customer){
                console.log('---orderctrl---',customer);
                $scope.customer=customer[0];
                console.log("play--2");
            })
            .error(function(){
                console.log("error");
            });
        
           }
        init();
    };
    
    orderCtrl.$inject=['$scope','$routeParams','customerFactory'];
    
    angular.module('myApp')
        .controller('orderCtrl',orderCtrl);    
}());