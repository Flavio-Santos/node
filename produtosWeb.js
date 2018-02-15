var http = require('http');

http.createServer(function(request,response){
    if(request.url == "/produtos"){
        response.end("<html><body><h1>Listando produtos</h1></body></html>");
    }
    else{
        response.end("<html><body><h1>Home da casa do codigo</h1></body></html>");
    }
}).listen(4000,"localhost");



console.log('em pé');