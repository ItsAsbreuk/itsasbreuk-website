
require('../assets/css/pure.css');
require('../assets/css/pure-grids-responsive.css');
require('../assets/css/main.css');

// reflux-statechange NEEDS to be defined before any components are required!
var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

var constants = require('./constants');
var store = require('./store');
var actions = require('./actions');
var Header = require('./components/header');
var router;

// var Checkbox = require('./components/itsa-react-checkbox.js');

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

var Home = require('./components/home');
var About = require('./components/about');
var BuildingSPA = require('./components/building-spa');
var Projects = require('./components/projects');
var OpenSource = require('./components/opensource');

var onUpdate = function(p1,p2,p3,p4) {
    console.warn('router');
    console.warn(router);
};

var App = React.createClass({
    onScroll: function() {
        actions[constants.SEND_SCROLL_AMOUNT](window.scrollY);
    },
    componentDidMount: function() {
        window.addEventListener('scroll', this.onScroll);
    },
    componentWillUnMount: function() {
        window.removeEventListener('scroll', this.onScroll);
    },
    onRouteChange: function() {
        var router = this.refs.appRouter,
            path = router.state.location.pathname;
        if (path && window.ga) {
            window.ga('set', 'page', path);
            window.ga('send', 'pageview');
        }
        console.warn(this.refs.appRouter.state.location.pathname);
        window.scrollTo(0, 0);
    },
    render: function() {
        return (
            <Router ref='appRouter' onUpdate={this.onRouteChange}>
                <Route path="/" component={Website}>
                    <IndexRoute component={Home} />
                    <Route path="marco-asbreuk-about" component={About}/>
                    <Route path="marco-asbreuk-opensource-projects" component={OpenSource}/>
                    <Route path="building-spa" component={BuildingSPA}/>
                    <Route path="marco-asbreuk-projects" component={Projects}/>
                </Route>
            </Router>
        )
    }
});

// We choose to bunde all in 1 file, because its a small site.
// When split-bundle is needed, see: https://github.com/rackt/react-router/blob/master/docs/guides/advanced/DynamicRouting.md
React.render(<App />, document.body);
