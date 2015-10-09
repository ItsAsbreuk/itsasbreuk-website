require('../../assets/css/about.css');

var React = require('react'),
    Reflux = require('reflux'),
    Link = require('react-router').Link,
    actions = require('../actions'),
    Footer = require('./footer'),
    store = require('../store'),
    constants = require('../constants'),
    actions = require('../actions'),
    image_marco = require('../../assets/images/marco_asbreuk.png'),
    Page;

Page = React.createClass({
    mixins: [Reflux.connect(store)],
    componentWillMount: function() {
        actions[constants.SEND_ROUTE_STATE]('about');
    },
    render: function() {
        var class1 = "pure-button itsa-button itsa-button-small itsa-button-red loose-left loose-right";
        var class2 = "pure-button itsa-button itsa-button-small itsa-button-forcewidth";
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content">

                        <div className="splash-container">
                            <h1 className="splash-head about-head">
                                Marco Asbreuk
                                <img id="marco_img" src={image_marco} />
                            </h1>
                            <p className="splash-subhead">
                                About myself: <span className="red bold">looking for new opportunities as a remote worker</span>.
                            </p>
                            <p>
                                <a href="https://github.com/ItsAsbreuk" target="_blank" className={class1}><i className="fa fa-github loose-right"></i>GitHub</a>
                                <a href="https://nl.linkedin.com/in/itsasbreuk" target="_blank" className={class1}><i className="fa fa-github loose-right"></i>LinkedIn</a>
                                <a href="https://twitter.com/itsasbreuk" target="_blank" className={class1}><i className="fa fa-github loose-right"></i>Twitter</a>
                            </p>
                        </div>

                        <div>
                            <p>
                            I'm a senior frontend engineer: building rock solid, high performant web-applications that remain manageable in the long term.
                            I have built several SPAs using latest technologies. My current favorite stack exists of:
                            </p>
                            <ul className="href-items">
                                <li><a href="https://nodejs.org" target="_blank" className={class2}>Nodejs</a></li>
                                <li><a href="http://hapijs.com" target="_blank" className={class2}>Hapijs</a></li>
                                <li><a href="http://www.couchbase.com/nosql-databases/couchbase-server" target="_blank" className={class2}>Couchbase server</a></li>
                                <li><a href="https://facebook.github.io/react" target="_blank" className={class2}>React</a></li>
                                <li><a href="https://github.com/reflux/refluxjs" target="_blank" className={class2}>Reflux</a></li>
                                <li><a href="https://github.com/rackt/react-router" target="_blank" className={class2}>React-router</a></li>
                                <li><a href="http://purecss.io" target="_blank" className={class2}>PureCSS</a></li>
                                <li><a href="https://webpack.github.io" target="_blank" className={class2}>Webpack</a></li>
                                <li><a href="https://mochajs.org" target="_blank" className={class2}>Mocha</a></li>
                                <li><a href="http://yui.github.io/yuidoc" target="_blank" className={class2}>YUI-docs</a></li>
                            </ul>
                            <p>
                            This webpage itself is actually built using this stack. You can see the source-code here: <a href="https://github.com/ItsAsbreuk/itsasbreuk-website" target="_blank" className="pure-button itsa-button itsa-button-small itsa-button-red"><i className="fa fa-github loose-right"></i>website Its Asbreuk</a>
                            </p>
                            <p>
                            As a former active <a href="http://yuilibrary.com" target="_blank" className="normal-link">YUI3</a> community-member, I have built many open source modules. When YUI3 ended lifetime,
                            I started to build my own very modern javascript framework: <a href="http://itsa.io" target="_blank" className="normal-link">ITSA modules</a>,
                            consisting of commonJS modules that also can be used stand alone. My latest web-applications are built using the stack mentioned above, combined with some of its modules.
                            </p>
                            <p>
                            With the current landscape, building a robust and maintainable single-page web-application becomes a complex task. It needs one ore more engineers keeping focussing on the application fulltime.
                            This is why I decided to stop my activities with Its Asbreuk. I am currently searching for an excellent tech-company that fits my <Link to="/building-spa" className="normal-link">vision</Link> and interests best. (USA, UK or Canada as a remote job).
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