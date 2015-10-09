// To enable rendering the JSX modules, we must load babel/register: this lets us require files with JSX/ES6 in them
require('babel/register');
require('style-loader');
require('css-loader');

var getConfig = require('hjs-webpack'),
    webpackHtml = require('./itsa-hjs-webpack-html'),
    Home = require('./src/app/components/home'),
    About = require('./src/app/components/about'),
    BuildingSPA = require('./src/app/components/building-spa'),
    Projects = require('./src/app/components/projects'),
    OpenSource = require('./src/app/components/opensource'),
    webAppConfig, preRenderedComponents;

// the properties sould match the filenames inside the './src/pages' folder
preRenderedComponents = {
    'about.html': About,
    'building-spa.html': BuildingSPA,
    'index.html': Home,
    'opensource.html': OpenSource,
    'projects.html': Projects
};

webAppConfig = getConfig({
    in: './src/app/app.js',
    out: './public',
    html: webpackHtml.getHtml('./src/pages', preRenderedComponents),
    isDev: false,
    clearBeforeBuild: true
});

module.exports = webAppConfig;