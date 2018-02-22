function Chore() {
    this.name = ''
    this.owner = ''
    this.date = ''
    this.location = ''
    this.description = ''
    this.isCompleted = false

}

Chore.prototype.verifyComplete = function (complete) {
    this.isCompleted = complete
}

Chore.prototype.addName = function (name) {
    this.name = name
}

Chore.prototype.addOwner = function(owner) {
    this.owner = owner
}

Chore.prototype.addDate = function (date) {
    this.date = date
}

Chore.prototype.addLocation = function (location) {
    this.location = location
}

Chore.prototype.addDescription = function (description) {
    this.description = description
}

module.exports = Chore
