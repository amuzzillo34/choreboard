var express = require('express')
var path = require('path')
var htmlRouter = express.Router()


htmlRouter.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, '../public/login.html'))
//    css(req,res);
});

htmlRouter.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')))

htmlRouter.get('/chorelist', (req, res) => res.sendFile(path.resolve(__dirname, '../public/chorelist.html')))

htmlRouter.get('/profile', (req, res) => res.sendFile(path.resolve(__dirname, '../public/profile.html')))

htmlRouter.get('/settings', (req, res) => res.sendFile(path.resolve(__dirname, '../public/settings.html')))

htmlRouter.get('/chore', (req, res) => res.sendFile(path.resolve(__dirname, '../public/chore.html')))



module.exports = htmlRouter

/*function css(req,res) {
    if(req.url === '/style.css'){
        res.writeHead(200, {'Content-type': 'text/css'});
        var fileContents = fs.readFileSync('../public/style.css', {encoding: 'utf8'});
        res.write(fileContents);
    }
}*/
