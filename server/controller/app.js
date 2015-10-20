/**
 * Created by arifkhan on 10/10/15.
 */
'use strict';

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var Joi = require('joi');
var Boom = require('boom');
var MyApp = React.createFactory(require('../../client/pages/app.jsx'));

var documentType = '<!DOCTYPE html>';

var options = {
    title: 'Choose a dessert',
    items: [
        'Apple Pie',
        'Peach Cobbler',
        'Gulab Jamun'
    ]
}

function safeStringify(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

exports.initiate = {
    handler: function(request, reply) {

        var appHtml = ReactDOMServer.renderToString(MyApp(options));
        reply(
            '<html>'+
            '<head>'+
                '<title>DropDown Test</title>'+
                '<link rel="stylesheet" href="/public/styles/bootstrap.min.css"></link>'+
                '<link rel="stylesheet" href="/public/styles/font-awesome.min.css"></link>'+
                '<link rel="stylesheet" href="/public/styles/app.min.css"></link>'+
            '</head>'+
            '<body>'+
             '<div id="content">'+appHtml+'</div>'+
             '<script id="props" type="application/json">' +
                safeStringify(options) +
             '</script>' +
             '<script src="/public/js/core.min.js"></script>'+
             '<script src="/public/js/pages/app.min.js" ></script>'+
             '</body>'+
            '</html>'
        ).type('Content-Type', 'text/html');


    }
}