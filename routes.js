'use strict';

/**
 * This file contains all the routes handled by the server
 */

//Load endpoint modules
var Post = require('./server/controller/post');
var App = require('./server/controller/app');


//
//Server Endpoints
//
exports.endpoints = [
    {
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    },
    {
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            request.log('info', 'arif logging from request here');
            reply('hello world!');
        }
    },
    //Create Post
    {
        method: 'POST',
        path: '/post',
        config: Post.create

    },
    {
        method: 'GET',
        path: '/app',
        config: App.initiate
    },
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.view('home');
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: function (request, reply) {
            reply.view('about');
        }
    },
    {
        method: 'GET',
        path: '/dropdown',
        handler: function (request, reply) {
            reply.view('dropdownDemo');
        }
    }
];

