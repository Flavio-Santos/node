var express = require('express');
var app = express();

app.get("/produtos",function(require,response){
    response.send("<html><body><h1>Listando produtos</h1></body></html>");
});

app.listen(4000, function(){
    console.log("em pé");
});