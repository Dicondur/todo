// require module
var connect = require('connect')
var serveStatic = require('serve-static')


// create app
var app = connect();
var sFolder = "./www";
var nPort = 5100;
 
app.use(serveStatic(sFolder, {'index': ['index.html', 'index.htm']}))

app.listen(nPort, ()=>{
    console.log("Listening on port: " + nPort);
    console.log("Document Root: " + __dirname + "/" + sFolder);
});

