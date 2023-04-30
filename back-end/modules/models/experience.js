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
    start_date: {
        type: Date,
        require: true,
    },
    end_date: {
        type: Date,
        allowNull: true
    },
    location: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    skills: [String],
})

experienceSchema.plugin(timestamps)

module.exports = mongoose.model('Experience', experienceSchema)
