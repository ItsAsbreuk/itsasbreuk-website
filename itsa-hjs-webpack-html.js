var fs = require('fs'),
    fsp = require('fs-promise'),
    Path = require('path'),
    React = require('react'),
    substituteContext, trim, buildFile, getHtml, inlineCSS;

trim = function(src) {
    var re = new RegExp('( )*\n( )*', 'g');
    return src.replace(re, '');
};

substituteContext = function(src, obj) {
    var SUBREGEX  = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g;
    return src.replace(SUBREGEX, function (match, key) {
        return (obj[key]===undefined) ? '' : obj[key];
    });
};

buildFile = function(absoluteFile, context) {
    var fileContent;
    return fsp.readFile(absoluteFile, 'utf8').then(function(fileContent) {
        fileContent = trim(fileContent);
        fileContent = substituteContext(fileContent, context);
        return fileContent;
    });
};

inlineCSS = function(src, context) {
    var SUBREGEX = /<link(.+)\{css\}[^>]*>/g;
    var absolutePath = Path.join(__dirname, './build'+context.css);
    var fileContent = fs.readFileSync(absoluteFile, 'utf8');
    return src.replace(SUBREGEX, '<style type="text/css">' + fileContent + '</style>');
};

getHtml = function(path, preRenderedComponents) {
    return function (context, callback) {
        var absolutePath = Path.join(__dirname, path),
            hash = [],
            routes = {};
        fsp.readdir(absolutePath).then(function(files) {
            files.forEach(function(file) {
                var preRenderComponent = preRenderedComponents[file],
                    promise;
                if (preRenderComponent) {
                    context.html = React.renderToString(React.createElement(preRenderComponent));
                }
                promise = buildFile(Path.join(absolutePath, file), context).then(function(filedata) {
                    routes[file] = filedata;
                });
                hash.push(promise);
            });
            // wait for everything to be ready:
            return Promise.all(hash);
        })
        .then(
            callback.bind(null, null, routes),
            callback
        );
    };
};

module.exports = {
    getHtml: getHtml,
    inlineCSS: inlineCSS
};