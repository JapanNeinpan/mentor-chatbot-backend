const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    Answer: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Answers', AnswerSchema);
