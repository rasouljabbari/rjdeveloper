const mongoose = require('mongoose');
const Schema = mongoose.Schema
const timestamps = require('mongoose-timestamp');

const aboutMeSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    job_title: {
        type: String,
        require: true
    },
    job_level: {
        type: String,
        require: true
    }
})

aboutMeSchema.plugin(timestamps)

module.exports = mongoose.model('About', aboutMeSchema)
