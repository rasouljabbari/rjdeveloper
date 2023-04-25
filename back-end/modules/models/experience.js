const mongoose = require('mongoose');
const Schema = mongoose.Schema
const timestamps = require('mongoose-timestamp');

const experienceSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    skills: [
        {
            type: String,
            require: true
        }
    ],
})

experienceSchema.plugin(timestamps)

module.exports = mongoose.model('Experience', experienceSchema)
