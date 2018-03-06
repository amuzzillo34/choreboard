var express = require('express')
var path = require('path')
var htmlRouter = express.Router()


htmlRouter.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../public/login.html'))
});

//htmlRouter.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')))
htmlRouter.get('/login', function(req,res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

htmlRouter.get('/chore/:id', function(req,res){
    res.sendFile(path.join(__dirname, '../public/chore.html'))
});

htmlRouter.get('/chore/index', function(req,res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

htmlRouter.get('/indexb', function(req,res){
    res.sendFile(path.join(__dirname, '../public/indexb.html'))
});

htmlRouter.get('/index', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')))

htmlRouter.get('/chorelist', (req, res) => res.sendFile(path.resolve(__dirname, '../public/chorelist.html')))

htmlRouter.get('/kitchen', (req, res) => res.sendFile(path.resolve(__dirname, '../public/kitchen.html')))

htmlRouter.get('/bathroom', (req, res) => res.sendFile(path.resolve(__dirname, '../public/bathroom.html')))

htmlRouter.get('/bedroom', (req, res) => res.sendFile(path.resolve(__dirname, '../public/bedroom.html')))

htmlRouter.get('/livingroom', (req, res) => res.sendFile(path.resolve(__dirname, '../public/livingroom.html')))

htmlRouter.get('/laundryroom', (req, res) => res.sendFile(path.resolve(__dirname, '../public/laundryroom.html')))

htmlRouter.get('/profile', (req, res) => res.sendFile(path.resolve(__dirname, '../public/profile.html')))

htmlRouter.get('/settings', (req, res) => res.sendFile(path.resolve(__dirname, '../public/settings.html')))

htmlRouter.get('/chore', (req, res) => res.sendFile(path.resolve(__dirname, '../public/chore.html')))

htmlRouter.get('/addChore', (req, res) => res.sendFile(path.resolve(__dirname, '../public/addchore.html')))




module.exports = htmlRouter

/*function css(req,res) {
    if(req.url === '/style.css'){
        res.writeHead(200, {'Content-type': 'text/css'});
        var fileContents = fs.readFileSync('../public/style.css', {encoding: 'utf8'});
        res.write(fileContents);
    }
}*/
