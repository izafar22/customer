
(function(){
//app.controller('tableCtrl',function($scope){
  
    var tableCtrl = function($scope,customerFactory){
    $scope.ref="Hi im here";
        function init(){
        $scope.data=customerFactory.getCustomers();
    }
        init();
}
    tableCtrl.$inject=['$scope','customerFactory'];
    
    angular.module('myApp')
     .controller('tableCtrl',tableCtrl)
}())