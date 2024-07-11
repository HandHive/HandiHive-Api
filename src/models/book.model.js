const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookErrandSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    runners: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('BookErrand', bookErrandSchema);