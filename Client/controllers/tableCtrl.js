
(function(){
//app.controller('tableCtrl',function($scope){
  
    var tableCtrl = function($scope,customerFactory,appSettings){
        
        
        function init(){
        $scope.appSettings=appSettings;
            customerFactory.getCustomers()
                .success(function(customers){
                $scope.data=customers;
                console.log("play");
                })
                .error(function(){
                console.log("error");
            });
    
        }
            init();
};
    tableCtrl.$inject=['$scope','customerFactory','appSettings'];
    
    angular.module('myApp')
     .controller('tableCtrl',tableCtrl)
}())