const mongoose = require('mongoose');
const Schema = mongoose.Schema
const timestamps = require('mongoose-timestamp');

const educationSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    start: {
        type: Number,
        require: true
    },
    end: {
        type: Number,
        require: true
    },
})

educationSchema.plugin(timestamps)

module.exports = mongoose.model('Education', educationSchema)
