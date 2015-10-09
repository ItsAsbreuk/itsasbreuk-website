require('../assets/css/pure.css');
require('../assets/css/pure-grids-responsive.css');
require('../assets/css/main.css');

var React = require('react'),
    Reflux = require('reflux'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Link = ReactRouter.Link,
    constants = require('./constants'),
    actions = require('./actions'),
    Website = require('./components/website'),
    Home = require('./components/home'),
    About = require('./components/about'),
    BuildingSPA = require('./components/building-spa'),
    Projects = require('./components/projects'),
    OpenSource = require('./components/opensource'),
    App;

App = React.createClass({
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