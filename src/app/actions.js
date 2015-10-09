var Reflux = require('reflux');
var constants = require('./constants');
var actions = [
    constants.SEND_SCROLL_AMOUNT,
    constants.SEND_ROUTE_STATE
];

module.exports = Reflux.createActions(actions);