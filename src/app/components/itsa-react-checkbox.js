var React = require('react');

var Checkbox = React.createClass({
    getInitialState: function() {
        return {
            checked: true
        };
    },
    handler: function() {
        this.setState({
            checked: !this.state.checked
        }, function() {return 10;});
    },
    render:function() {
        var checked = this.state.checked ? 'ON' : 'OFF';
        return <h2 onClick={this.handler}>Checkbox: {checked}</h2>
    }
});

module.exports = Checkbox;
