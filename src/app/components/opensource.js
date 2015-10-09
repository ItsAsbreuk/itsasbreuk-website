var React = require('react'),
    Reflux = require('reflux'),
    Footer = require('./footer'),
    store = require('../store'),
    constants = require('../constants'),
    actions = require('../actions'),
    Page;

Page = React.createClass({
    mixins: [Reflux.connect(store)],
    componentWillMount: function() {
        actions[constants.SEND_ROUTE_STATE]('opensource');
    },
    render: function() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content">

                        <div className="splash-container">
                            <h1 className="splash-head">Marco Asbreuk</h1>
                            <p className="splash-subhead">
                                Open source contributions
                            </p>
                        </div>


                        <div className="pure-g">
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                    NPM modules
                                </h3>
                                <p>
                                    On NPM, you can find several powerful modules of mine, like event-module, promised-based io-module, reflux helpers, promise-wrappers and react-modules.
                                </p>
                                <a href="https://www.npmjs.com/~itsasbreuk" target="_blank" className="pure-button itsa-button align-text-middle">
                                    <svg className="align-text-middle loose-right" xmlns="http://www.w3.org/2000/svg" width="52px" height="20px" viewBox="0 0 18 7">
                                        <path fill="#666" d="M0,0v6h5v1h4v-1h9v-6"/>
                                        <path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"/>
                                    </svg>
                                    view
                                </a>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                    YUI3 modules
                                </h3>
                                <p>
                                    <a href="http://yuilibrary.com" target="_blank" className="normal-link">YUI3</a> was YAHOO!'s awesome framework, but it has ended lifetime.
                                    Most of its powerful features found their way into <a href="https://facebook.github.io/react/" target="_blank" className="normal-link">React</a>.
                                    In the period I developed with YUI3, I had a couple of hangouts with YUI3 core-developers:
                                    <ul className="href-items">
                                        <li>
                                            <a href="https://www.youtube.com/watch?v=u3w9Eq4W-54" target="_blank" className="pure-button itsa-button itsa-button-small"><i className="fa fa-youtube loose-right"></i>Its Asbreuk YUI3 gallery docs</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/watch?v=rFRFaimPTuk" target="_blank" className="pure-button itsa-button itsa-button-small"><i className="fa fa-youtube loose-right"></i>Using Promises in Mojito</a>
                                        </li>
                                    </ul>
                                    All the modules I've created are no longer maintained either, but they can viewed found on GitHub:
                                </p>
                                <a href="https://github.com/ItsAsbreuk/itsa-gallery" target="_blank" className="pure-button itsa-button"><i className="fa fa-github loose-right"></i>view</a>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                    ITSA Framework modules
                                </h3>
                                <p>
                                    These are isomorphic modules for building building fast, robust and scalable web-applications. The modules can be loaded stand-alone,
                                    or bundled as a complete modern library. These are very modern modules, where focus lies upon easy setup and robust modules (highly tested, not memory leaking).
                                </p>
                                <a href="http://itsa.io/modules" target="_blank" className="pure-button itsa-button"><i className="fa fa-eye loose-right"></i>view</a>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                    Itag custom elements
                                </h3>
                                <p>
                                    Itags is my attempt of creating custom elements (like Polymer), though server-side renderable. However, I've decided to end further development into
                                    custom elements (more about the why later). You can still view the modules, <span className="red">but they are all in beta</span>.
                                </p>
                                <a href="http://itags.io/modules" target="_blank" className="pure-button itsa-button"><i className="fa fa-eye loose-right"></i>view</a>
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