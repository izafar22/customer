(function(){
    
    var customerFactory=function(){
      
        var customers=[{id:232,name:'Rakesh',city:'Bangalore',orderTotal:'12.345',joined:'2016-01-02',orders:[{id:20,product:'Kindle',total:101}]},
    {id:456,name:'Ram',city:'Bangalore',orderTotal:'20.345',joined:'2015-04-02',orders:[{id:23,product:'sofy',total:14}]},
    {id:326,name:'Dinesh',city:'Mumbai',orderTotal:'34.5',joined:'2016-03-12',orders:[{id:21,product:'alpenlibie',total:1}]},
    {id:987,name:'Sukhi',city:'Bangalore',orderTotal:'123.45',joined:'2015-12-08',orders:[{id:22,product:'maggi',total:10}]},
    {id:321,name:'Iqbal',city:'Delhi',orderTotal:'5.54',joined:'2012-03-04',orders:[{id:24,product:'usb',total:100}]}
    ]
        
        var factory={};
        
        factory.getCustomers=function(){
            return customers;
        };
        
        factory.getCustomer = function(customerId){
            for (var i=0,len=customers.length;i<len;i++){
                if(customers[i].id === parseInt(customerId))
                    return customers[i];
            }
        return {}; 
        };
        
        return factory;
    };
    
    angular.module('myApp')
    .factory('customerFactory',customerFactory)
    
    
}());