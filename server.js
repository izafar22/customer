var express = require('express');
var app=express();
var path = require('path');
var cors= require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname,'./Client')));

app.get('/customers',function(req,res){
    res.json(customers);
});

app.get('/orders/:id',function(req,res){
    var customerId=parseInt(req.params.id);
    console.log('-------',customerId);
    console.log('--len--',customers.length);
    var data = customers.filter(function(customer){
        
        return(customer.id === customerId);
    });
    
    console.log(data);
    
    /*for (var i=0,len=customers.length;i<len;i++){
        if(customers[i].id === customerId )
         var data=customers[i];
        console.log('--data---',data);
            return res.json(data);
            }*/
    return res.json(data);
});


app.listen(3000,function(){
    console.log("connecting to port 3000");
});

var customers=[{id:232,name:'Rakesh',city:'Bangalore',orderTotal:'12.345',joined:'2016-01-02',orders:[{id:20,product:'Kindle',total:101}]},
    {id:456,name:'Ram',city:'Bangalore',orderTotal:'20.345',joined:'2015-04-02',orders:[{id:23,product:'sofy',total:14}]},
    {id:326,name:'Dinesh',city:'Mumbai',orderTotal:'34.5',joined:'2016-03-12',orders:[{id:21,product:'alpenlibie',total:1}]},
    {id:987,name:'Sukhi',city:'Bangalore',orderTotal:'123.45',joined:'2015-12-08',orders:[{id:22,product:'maggi',total:10}]},
    {id:321,name:'Iqbal',city:'Delhi',orderTotal:'5.54',joined:'2012-03-04',orders:[{id:24,product:'usb',total:100}]}
    ];