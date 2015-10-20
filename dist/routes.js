'use strict';

/**
 * This file contains all the routes handled by the server
 */

//Load endpoint modules
var Post = require('./server/controller/post');

//
//Server Endpoints
//
exports.endpoints = [{
    method: 'GET',
    path: '/hello',
    handler: function handler(request, reply) {
        request.log('info', 'arif logging from request here');
        reply('hello world');
    }
},
//Create Post
{
    method: 'POST',
    path: '/post',
    config: Post.create

}];