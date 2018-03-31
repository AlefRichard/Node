var http = require('http');

var server = http.createServer( function(req, res){

    var categoria = req.url;

    if(categoria == '/ti')
    {
        res.end("<html><body>TI</body></html>");    
    }
    else if(categoria == '/moda')
    {
        res.end("<html><body>Moda</body></html>");
    }
    else
    {
        res.end("<html><body>Teste Alef</body></html>");
    }

}).listen(8085);