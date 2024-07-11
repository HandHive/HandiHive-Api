const mongoose = require('mongoose');

const schema = mongoose.Schema;

const authSchema = new schema({
    user: {
        type: String,
        required: true,
        enum: ['Client', 'Runner']
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Auth', authSchema)