var guid = require('guid');
var Dispatcher = (function () {
    function Dispatcher() {
        this.listeners = {};
    }
    Dispatcher.prototype.register = function (cb) {
        var id = guid.raw();
        this.listeners[id] = cb;
        return id;
    };
    Dispatcher.prototype.dispatch = function (payload) {
        console.info("Dispatching..", payload);
        for (var id in this.listeners) {
            var listener = this.listeners[id];
            listener(payload);
        }
    };
    return Dispatcher;
})();
var dispatcher = new Dispatcher();
exports.dispatcher = dispatcher;
