const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    usn: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
});

module.exports = User = mongoose.model("users", userSchema);
