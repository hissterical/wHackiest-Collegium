const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    date: {type: Date}
});

module.exports = Post = mongoose.model('Post', PostSchema);