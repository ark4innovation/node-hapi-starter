var Hoek = require('hoek');
var React = require('react');
var ReactDOMServer = require('react-dom/server');


var DEFAULTS = {
    documentType: '<!DOCTYPE html>',
    renderMethod: 'renderToStaticMarkup',
};


var compile = function compile(template, compileOpts) {

    compileOpts = Hoek.applyToDefaults(DEFAULTS, compileOpts);

    var Component, Element;

    return function runtime(context, renderOpts) {

        renderOpts = Hoek.applyToDefaults(compileOpts, renderOpts);
        var output = renderOpts.documentType;
        Component = Component || require(compileOpts.filename);
        Element = Element || React.createFactory(Component);
        output += ReactDOMServer[renderOpts.renderMethod](Element(context));

        return output;
    };
};


module.exports = {
    compile: compile
};