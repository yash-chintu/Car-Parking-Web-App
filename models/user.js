const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    carLocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcity',
        default: null
    }
})


// const User = mongoose.model('User', userSchema);
// module.exports = User;

module.exports = mongoose.models.User || mongoose.model('User', userSchema);

