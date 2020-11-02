const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('users', UserSchema);
