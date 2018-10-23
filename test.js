const Observer = require('./Observer.js')

module.exports = function() {
    const observer = new Observer()
    observer.on('fuck', (data) => {
        console.log(data)
    })
}

