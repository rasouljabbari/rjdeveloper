const mongoose = require('mongoose');
const Schema = mongoose.Schema
const timestamps = require('mongoose-timestamp');

const ContactSchema = new Schema({
    full_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: false
    },
    mobile: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true
    }
})

ContactSchema.plugin(timestamps)

module.exports = mongoose.model('Contact', ContactSchema)
