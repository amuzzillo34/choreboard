function Chore() {
    this.name = ''
    this.date = ''
    this.location = ''
    this.description = ''
    this.isCompleted = false
    
    this.verifyComplete = function(complete) {
        this.isCompleted = complete
    }
}

module.exports = Chore