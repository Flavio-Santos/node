var app = require('./config/express')();

app.get("/produtos",function(require,response){
    response.render("produtos/lista");
});

app.listen(4000, function(){
    console.log("em pé");
});