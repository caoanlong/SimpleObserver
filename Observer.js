function Observer() {}

// 定义静态属性
Observer.prototype.callbacks = {}

Observer.prototype.on = function(type, callback) {
    if (this.callbacks[type]) {
        this.callbacks[type].push(callback)
    } else {
        this.callbacks[type] = [callback]
    }
}

Observer.prototype.emit = function(type, data) {
    if (this.callbacks[type]) {
        for (let i = 0; i < this.callbacks[type].length; i++) {
            const callback = this.callbacks[type][i]
            callback(data)
        }
    }
}

module.exports = Observer