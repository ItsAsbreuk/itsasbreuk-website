var getConfig = require('hjs-webpack'),
    webpackHtml = require('./itsa-hjs-webpack-html'),
    webAppConfig;


webAppConfig = getConfig({
    in: './src/app/app.js',
    out: './public',
    html: function (context) {
      return {
        'index.html': '<!doctype html>'+
                      '<head>'+
                      '<meta charset="utf-8"/>'+
                      '<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>'+
                      '<link rel="stylesheet" href="'+context.css+'"/>'+
                      '<script>'+
                        '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){'+
                        '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
                        'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
                        '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');'+
                        'ga(\'create\', \'UA-68648626-1\', \'auto\');'+
                        'ga(\'send\', \'pageview\');'+
                      '</script>'+
                      '</head>'+
                      '<body>'+
                      '</body>'+
                      '<script src="'+context.main+'"></script>'
      };
    },
    isDev: false,
    clearBeforeBuild: true
});

module.exports = webAppConfig;