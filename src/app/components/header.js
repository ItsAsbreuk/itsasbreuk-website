require('../../assets/css/header.css');

var React = require('react'),
    Reflux = require('reflux'),
    store = require('../store'),
    Link = require('react-router').Link,
    image = require('../../assets/images/hummingbird.png'),
    maxScrollAmount = 50,
    fadeArea = 100,
    classNames = require('classnames'),
    Header;

Header = React.createClass({
    mixins: [Reflux.connect(store)],
    render: function() {
        var imageOffset= Math.round(this.state.scrollamount/4),
            scrollamount = Math.min(maxScrollAmount, imageOffset),
            shrinked = (imageOffset>maxScrollAmount),
            styles, headerClass, opacity;
        opacity = Math.max(0,1-(imageOffset/fadeArea));
        styles = {
            // fontSize: '120%'
            backgroundImage: 'url('+image+')',
            // backgroundPosition: '0 '+scrollamount+'px',
            opacity: opacity
        };
        headerClass = classNames({
            header: true,
            'home-menu': true,
            'pure-g': true,
            'pure-menu-fixed': true,
            'pure-menu-horizontal': shrinked,
            shrinked: shrinked
        });
        return (
            <div>
                <div className={headerClass}>
                    <div className="pure-u-1-2 left-menu">
                        <div className="pure-menu">
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item building-spa"><Link to="/building-spa" className="pure-menu-link"><span className="my">MY</span>VISION</Link></li>
                                <li className="pure-menu-item opensource"><Link to="/marco-asbreuk-opensource-projects" className="pure-menu-link"><span className="my">MY</span>CONTRIBUTIONS</Link></li>
                                <li className="pure-menu-item projects"><Link to="/marco-asbreuk-projects" className="pure-menu-link"><span className="my">MY</span>PROJECTS</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pure-u-1-2 right-menu">
                        <div className="pure-menu">
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item home"><Link to="/" className="pure-menu-link">HOME</Link></li>
                                <li className="pure-menu-item about"><Link to="/marco-asbreuk-about" className="pure-menu-link">ABOUT ME</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hummingbird" style={styles}></div>
            </div>
        )
    }
});

module.exports = Header;