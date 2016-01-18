var count = 1;
var EventDispatcher = function() {
    this.count = count++;
    this.__map = new Map();

    this.hasListeners = function(event) {

    };

    this.addEventListener = function(event, callback) {
        var list = this.__map.get(event);
        !list && (list = []);
        if(callback instanceof Array) {
            list = list.concat(callback);
        }else {
            list.push(callback);
        }

        this.__map.set(event, list);
    };

    this.removeEventListener = function(event, callback) {
        var list = this.__map.get(event);
        !list && (list = []);

        var index = list.findIndex(function(item) {
            return item === callback;
        });
        try {
            list.splice(index, 1);
        }catch(e) {

        }

        this.__map.set(event, list);
    };

    this.removeAllListener = function() {
        this.__map.clear();
    };

    this.dispatchEvent = function(event, data) {
        if(typeof event == 'string') {
            event = this.createEvent(event);
            event.data = data;
        }

        var list = this.__map.get(event.type);

        if(list && list instanceof Array) {
            list.forEach((callback)=>(callback && callback.call(this, event)));
        }
    };

    this.createEvent = function(type) {
        try {
            return new Event(type);
        }catch(e) {
            var event = document.createEvent('Event');
            event.initEvent(type, true, false);
            return event;
        }
    }
};

module.exports = EventDispatcher;