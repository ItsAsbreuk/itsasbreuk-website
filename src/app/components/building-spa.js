var React = require('react'),
    Reflux = require('reflux'),
    Footer = require('./footer'),
    Link = require('react-router').Link,
    store = require('../store'),
    constants = require('../constants'),
    actions = require('../actions'),
    Page;

var Page = React.createClass({
    mixins: [Reflux.connect(store)],
    componentWillMount: function() {
        actions[constants.SEND_ROUTE_STATE]('building-spa');
    },
    render: function() {
        var class1 = "pure-button itsa-button itsa-button-small itsa-button-forcewidth";
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content">

                        <div className="splash-container">
                            <h1 className="splash-head">Build single-page applications (SPAs)</h1>
                            <p className="splash-subhead">
                                For best performances
                            </p>
                        </div>


                        <div>
                            <p>
                                Building a high-performant web-application is a complex task. It no longer needs a frontend-developer, you need to be a frontend-engineer.
                                There are several techniques you can use and many frameworks arround. Being able to set up a complex application that performs well and keeps manageable,
                                you need to build an <span className="red">SPA that can do serverside rendering</span>. I found (currently) the best stack to be:
                            </p>
                            <ul className="href-items">
                                <li><a href="https://nodejs.org" target="_blank" className={class1}>Nodejs</a></li>
                                <li><a href="https://facebook.github.io/react" target="_blank" className={class1}>React</a></li>
                                <li><a href="https://github.com/reflux/refluxjs" target="_blank" className={class1}>Reflux</a></li>
                                <li><a href="http://purecss.io" target="_blank" className={class1}>PureCSS</a></li>
                                <li><a href="https://webpack.github.io" target="_blank" className={class1}>Webpack</a></li>
                                <li><a href="https://mochajs.org" target="_blank" className={class1}>Mocha</a></li>
                                <li><a href="http://yui.github.io/yuidoc" target="_blank" className={class1}>YUI-docs</a></li>
                            </ul>
                            <p>
                                This stack enables you to build webapplications that serverside render, have little requests, load code on demand and have a great separate of concerns.
                                You can build TDD adn write nice documentation. You're going to need this when the project grows and you still want to have it manageable.
                            </p>
                            <p>
                                In General, web-development is an area that <a href="http://dailyjs.com/2013/02/04/stack/" target="_blank" className="normal-link">moves very quickly</a>.
                                In the past, a developer could easily take care of multiple projects at the same time. However, with the current complexity and landscape,
                                building a large web-application takes multiple fulltime engineers. This is also why I decided to stop my activities with Its Asbreuk
                                and am <Link to="/marco-asbreuk-about" className="normal-link">searching for an awesome compagny</Link> to apply my services fulltime.
                            </p>
                        </div>
                    </div>

                    <Footer />

                </div>
            </div>
        )
    }
});

module.exports = Page;