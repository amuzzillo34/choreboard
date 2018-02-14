function Chore() {
    this.name = ''
    this.date = ''
    this.location = ''
    this.description = ''
    this.isCompleted = false
    
    this.verifyComplete = function(complete) {
        this.isCompleted = complete
    }
    
    this.addName = function(name) {
        this.name = name
    }
    
    this.addDate = function(date) {
        this.date = date
    }
    
    this.addLocation = function(location) {
        this.location = location
    }
    
    this.addDescription = function(description) {
        this.description = description
    }
}

module.exports = Chore
