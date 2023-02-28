const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('user', UserSchema)