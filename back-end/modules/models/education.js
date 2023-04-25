const mongoose = require('mongoose');
const Schema = mongoose.Schema
const timestamps = require('mongoose-timestamp');

const educationSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
})

educationSchema.plugin(timestamps)

module.exports = mongoose.model('Education', educationSchema)
