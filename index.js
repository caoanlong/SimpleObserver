const Observer = require('./Observer.js')

const observer = new Observer()
require('./test.js')()

observer.emit('fuck', 'nima')