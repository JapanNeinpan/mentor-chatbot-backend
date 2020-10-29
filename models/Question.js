const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    },
    subscribers:[{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]
});

module.exports = mongoose.model('questions', QuestionSchema);
