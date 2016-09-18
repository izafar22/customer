(function(){
    
    var orderCtrl = function($scope,$routeParams,customerFactory){
        $scope.pol="I am working";
        var customerId = $routeParams.customerId;
        $scope.customer={};
        console.log('-------',customerId); 
    
    
            $scope.customer=customerFactory.getCustomer(customerId);
            console.log('-------',customerId);
         
    };
    
    orderCtrl.$inject=['$scope','customerFactory','$routeParams'];
    
    angular.module('myApp')
        .controller('orderCtrl',orderCtrl);    
}());