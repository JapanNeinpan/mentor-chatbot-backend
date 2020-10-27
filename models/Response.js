const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ResponseSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:'users',
        required: false
    },
    date: { type: Date, default: Date.now }
});

module.exports = ResponseSchema;
