var express = require('express');
var app = express();

app.set('view engine','ejs')

app.get("/produtos",function(require,response){
    response.render("produtos/lista");
});

app.listen(4000, function(){
    console.log("em pé");
});