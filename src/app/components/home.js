var React = require('react'),
    Reflux = require('reflux'),
    store = require('../store'),
    constants = require('../constants'),
    actions = require('../actions'),
    Footer = require('./footer'),
    Link = require('react-router').Link,
    Page;

Page = React.createClass({
    mixins: [Reflux.connect(store)],
    componentWillMount: function() {
        actions[constants.SEND_ROUTE_STATE]('home');
    },
    render: function() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content">

                        <div className="splash-container">
                            <h1 className="splash-head">Marco Asbreuk</h1>
                            <p className="splash-subhead">
                                Building high-performant webapplications
                            </p>
                        </div>

                        <div className="pure-g">
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                                <h3 className="content-subhead">
                                    <i className="fa fa-rocket"></i>
                                    Single Page Applications
                                </h3>
                                <p>
                                    Complex web-application that performs well and keeps manageable,
                                    need to be a serverside renderable single-page application.
                                </p>
                                <Link to="/building-spa" className="pure-button itsa-button">read more</Link>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                    My projects
                                </h3>
                                <p>
                                    A glimpse of some of my b2b web-applications:
                                </p>
                                <Link to="/marco-asbreuk-projects" className="pure-button itsa-button">read more</Link>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                    My opensource contributions
                                </h3>
                                <p>
                                    I have contributed many components. On NPM, the YUI3-gallery and open-sourced my ITSA modules.
                                </p>
                                <Link to="/marco-asbreuk-opensource-projects" className="pure-button itsa-button">read more</Link>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-check-square-o"></i>
                                    About me
                                </h3>
                                <p>
                                    Interesed? I am currently searching for a remote job.
                                </p>
                                <Link to="/marco-asbreuk-about" className="pure-button itsa-button">read more</Link>
                            </div>
                        </div>
                    </div>

                    <Footer />

                </div>
            </div>
        )
    }
});

module.exports = Page;