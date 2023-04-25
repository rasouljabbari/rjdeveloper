const mongoose = require('mongoose');
const Schema = mongoose.Schema
const timestamps = require('mongoose-timestamp');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    profile: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        require: true
    },
    job_title: {
        type: String,
        require: true
    },
    social_media: [
        {
            type: String,
            require: true,
            unique: true
        }
    ],
    cv: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: String,
        require: true,
    },
    birthday: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
})

UserSchema.plugin(timestamps)

UserSchema.pre('save', async function (next) {
    const user = this;
    // If password has not changed, move on
    if (!user.isModified('password')) {
        return next();
    }

    try {
        // Generate salt
        const salt = await bcrypt.genSalt(10);

        // Hash password with salt
        // Replace password with hashed password
        user.password = await bcrypt.hash(user.password, salt);

        next();
    } catch (error) {
        return next(error);
    }

})

module.exports = mongoose.model('User', UserSchema)
