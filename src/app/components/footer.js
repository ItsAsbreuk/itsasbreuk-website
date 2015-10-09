require('../../assets/css/footer.css');

var React = require('react'),
    Footer;

Footer = React.createClass({
    render: function() {
        return (
            <div className="footer l-box is-center">
                IT'S ASBREUK
                <span className="breakpoint">|</span>
                DE BOSWEIDE 4   7497 LG - BENTELO  (NL)
                <span className="breakpoint">|</span>
                M  0031 6 243 21 690
                <span className="breakpoint">|</span>
                E  marco@itsasbreuk.nl
                <span className="breakpoint">|</span>
                KvK 08103312
                <span className="breakpoint">|</span>
                VAT NL1375.88.938.B01
                <span className="breakpoint">|</span>
                DESIGN <a href="http://fabriqueur.nl" target="_blank">FABRIQUEUR</a>
            </div>
        )
    }
});

module.exports = Footer;