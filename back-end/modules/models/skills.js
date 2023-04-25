const mongoose = require('mongoose');
const Schema = mongoose.Schema
const timestamps = require('mongoose-timestamp');

const skillsSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    logo: {
        type: String,
        require: true
    },
})

skillsSchema.plugin(timestamps)

module.exports = mongoose.model('Skills', skillsSchema)
