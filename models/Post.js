const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    picUrl: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    upvote: {
        type: Number
    },
    downvote: {
        type: Number
    }
});

module.exports = Post = mongoose.model("post", PostSchema);