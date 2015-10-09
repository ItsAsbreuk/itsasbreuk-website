var React = require('react');
var Reflux = require('reflux');
var Footer = require('./footer');
var Link = require('react-router').Link;
var store = require('../store');
var constants = require('../constants');
var actions = require('../actions');

var Page = React.createClass({
    mixins: [Reflux.connect(store)],
    componentWillMount: function() {
        actions[constants.SEND_ROUTE_STATE]('projects');
    },
    render: function() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content">

                        <div className="splash-container">
                            <h1 className="splash-head">Marco Asbreuk</h1>
                            <p className="splash-subhead">
                                Here is a small glimp of the projects I have created:
                            </p>
                        </div>

                        <div className="pure-g">
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                                <h3 className="content-subhead">
                                    <i className="fa fa-rocket"></i>
                                    ITSA Framework
                                </h3>
                                <p>
                                    Isomorphic modules for building building fast, robust and scalable web-applications. The modules can be loaded stand-alone,
                                    or bundled as a complete modern library. These are very modern modules, where focus lies upon easy setup and rubost modules (highly tested, not memory leaking).
                                </p>
                                <a href="http://itsa.io" target="_blank" className="pure-button itsa-button"><i className="fa fa-eye loose-right"></i>view</a>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-gift"></i>
                                    Designkado.nl
                                </h3>
                                <p>
                                    Beautiful webshop for gifts and interior items. Build with <a className="normal-link" href="https://developer.yahoo.com/cocktails/mojito/" target="_blank">Yahoo!'s mojito framework</a>.
                                </p>
                                <a href="http://designkado.nl" target="_blank" className="pure-button itsa-button"><i className="fa fa-eye loose-right"></i>view</a>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-car"></i>
                                    Connect2.clicktrace.eu
                                </h3>
                                <p>
                                    Framework voor tracking vehicles. This customer sells trace-devices, that are build inside the vehicles. The devices send their GPS location to our socket-server.
                                    The web-application presents the current positions and route-history. You can see its features by login with username=<b>demo</b> + password=<b>demo</b>.
                                    Build with <a className="normal-link" href="https://developer.yahoo.com/cocktails/mojito/" target="_blank">Yahoo!'s mojito framework</a>.
                                </p>
                                <a href="https://connect2.clicktrace.eu" target="_blank" className="pure-button itsa-button"><i className="fa fa-eye loose-right"></i>view</a>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-line-chart"></i>
                                    Heidata.nl
                                </h3>
                                <p>
                                    Expert found-advice and -supervision. This customer sells devices that life monitors pile-data for buiding constructions. During pile-driving,
                                    the devices send data to our server with information about the pile its state. The customer has a web-application by which he verifies
                                    and monitors the whole process. The current site is using very old techniques (framesets, no ajax). At this moment, it is undergoing a rebuild using our latest stack.
                                </p>
                                <a href="http://ekal.nl" target="_blank" className="pure-button itsa-button"><i className="fa fa-eye loose-right"></i>view</a>
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