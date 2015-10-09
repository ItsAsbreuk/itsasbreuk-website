var React = require('react'),
    Reflux = require('reflux',;
    store = require('./store'),
    Website;

var Website = React.createClass({
    mixins: [Reflux.connect(store)],
    render: function() {
        return (
            <div className={this.state.currentroute}>
                <Header />
                {this.props.children}
            </div>
        )
    }
});

module.exports = Website;