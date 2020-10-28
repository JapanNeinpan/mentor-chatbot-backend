const mongoose = require('mongoose');
const ResponseSchema = require('./Response');

const QuestionSchema = mongoose.Schema({
    questions: [{
        type: ResponseSchema,
        required: true,
    }],
    answers: [{
        type: ResponseSchema,
        required: false
    }],
    hotness: {
        type: Number,
        default: 0
    },
    tags: [{
        type: String,
        required: false
    }],
    resolved: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('questions', QuestionSchema);
