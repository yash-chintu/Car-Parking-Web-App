const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
    }
})



// const Admin = mongoose.model('User', adminSchema);

// module.exports = Admin;

module.exports = mongoose.models.Admin || mongoose.model('Admin', adminSchema);