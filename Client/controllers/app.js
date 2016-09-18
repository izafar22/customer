(function(){
angular.module('myApp',['ngRoute'])
.config(function($routeProvider){
        $routeProvider
         .when('/',{
            controller:'tableCtrl',
            templateUrl:'views/customers.html'})
        .when('/orders/:customerId',{
            controller:'orderCtrl',
            templateUrl:'views/orders.html'
        })  
        .otherwise({
        redirecTo:'/'
        })
        
            
        });
}()); 