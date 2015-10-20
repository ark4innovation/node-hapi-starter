/**
 * Created by arifkhan on 10/10/15.
 */
'use strict';

var Joi = require('joi');
var Boom = require('boom');
var Post = require('../model/post').Post;

exports.create = {
    validate: {
        payload: {
            content: Joi.string().required()
        }
    },
    handler: function handler(request, reply) {

        var post = new Post(request.payload);

        post.save(function (err, post) {
            if (!err) {
                return reply({ message: "Post created successfully" });
            } else {
                return reply(Boom.internal("Could not create post"));
            }
        });
    }
};