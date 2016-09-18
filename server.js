var express = require('express');
var app=express();
var path = require('path');
var cors= require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname,'./Client')));

app.listen(3000,function(){
    console.log("connecting to port 3000");
});