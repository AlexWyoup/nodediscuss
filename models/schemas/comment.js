/**
 * CommentSchema definition
 * @author heroic
 */

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Collection name in the database is `comment`
 * @type {Schema}
 */
var CommentSchema = new Schema({
  topicId: {
    type: String,
    index: true,
    required: true
  },
  commentId: String,
  content: {
    type: String,
    required: true
  },
  contentHtml: String,
  author: {
    id: {
      type: String,
      index: true,
      required: true
    },
    username: String,
    nickname: String,
    avatar: String
  },

  likeCount: {
    type: Number,
    default: 0
  }
}, {
  collection: 'comment'
});

/**
 * Plugins
 */
CommentSchema
  .plugin(require('../mongoose_plugins/timestamp'));

/**
 * Exports schema and model name
 * @type {object}
 */
module.exports = {
  schema: CommentSchema,
  modelName: 'Comment'
};