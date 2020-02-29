const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Questions', QuestionSchema);
