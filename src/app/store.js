var Reflux = require('reflux'),
    actions = require('./actions'),
    count = 0,
    store;

store = Reflux.createStore({
    listenables: [actions],
    sendRouteState: function(route) {
        this.trigger({currentroute: route});
    },
    sendScrollAmount: function(scrollamount) {
        this.trigger({scrollamount: scrollamount});
    },
    getInitialState: function() {
        return {
            currentroute: 'initial',
            scrollamount: 0
        };
    }
});

module.exports = store;