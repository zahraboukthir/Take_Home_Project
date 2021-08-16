const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    id:{
        type: Number,
        required: true,  
    },
    title: {
      type: String,
      required: true,
    },
    points:{
        type: Number,
    },
    user: {
      type: String,
    },
    time:{
        type: Number,
        required: true,  
    },
    time_ago: {
      type: String,
      required: true,
    },
    comments_count:{
        type: Number,
        required: true,  
    },
    type: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      domain: {
        type: String,
      }
  });

  module.exports = mongoose.model("Post", postSchema);