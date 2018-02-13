var express = require('express')
var path = require('path')
var htmlRouter = express.Router()


htmlRouter.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
//    css(req,res);
});


htmlRouter.get('/chorelist', (req, res) => res.sendFile(path.resolve(__dirname, '../public/chorelist.html')))
module.exports = htmlRouter

/*function css(req,res) {
    if(req.url === '/style.css'){
        res.writeHead(200, {'Content-type': 'text/css'});
        var fileContents = fs.readFileSync('../public/style.css', {encoding: 'utf8'});
        res.write(fileContents);
    }
}*/