/**
 * Created by arifkhan on 10/10/15.
 */
'use strict';

var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({

  /**
   * content: The post content
   */
  content: {
    type: String,
    required: true
  }
});

module.exports.Post = mongoose.model('Post', PostSchema);