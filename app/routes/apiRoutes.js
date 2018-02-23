var express = require('express')
var path = require('path')
var apiRouter = express.Router()
var fs = require("fs")
var dataPath = "../data/chore.js"
var choreJS = require(dataPath)
var jsonFile = path.join(__dirname, '../data/chores.json')

apiRouter.post('/api/addChore', function (req, res) {
    var newChore = new choreJS()
    newChore.addName(req.body.name)
    newChore.addOwner(req.body.owner)
    //need code that captures the who information from form
    newChore.addDate(req.body.date)
    newChore.addLocation(req.body.location)
    newChore.addDescription(req.body.description)


    fs.readFile(jsonFile, 'utf8', function (err, data) {
        var choreList = eval(data)
        choreList.push(newChore)
        fs.writeFile(jsonFile, JSON.stringify(choreList), () => {if (err) {throw err}})
    })

    res.redirect('/chorelist')
});

apiRouter.post('/api/chore/:id', function(req,res) {
    fs.readFile(jsonFile, 'utf8', function(err, data) {
        var choreList = eval(data)
        var chore = choreList[parseInt(req.params.id)]
        console.log(chore)
        res.send(chore)
    })
})

apiRouter.get('/api/chores', function (req, res) {
    var jsonFile = path.join(__dirname, '../data/chores.json')
    fs.readFile(jsonFile, 'utf8', function (err, data) {
        var choreList = eval(data)
        res.json(choreList)
    })
}); 


/** dataToWrite = '[' + JSON.stringify(person) + ']
		fs.writeFile(jsonFile, dataToWrite, (err) => {
			if (err) {throw err}
		})
        */




module.exports = apiRouter
