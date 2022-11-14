const mongoose = require('mongoose');

const subcitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parCityName: {
        type: String,
        required: true,
    },
    maxCapacity: {
        type: Number,
        required: true,
    },
    currentCapacity: {
        type: Number,
        required: true,
        default: 0
    }
})

// const Subcity = mongoose.model('User', subcitySchema);

// module.exports = Subcity;

module.exports = mongoose.models.Subcity || mongoose.model('Subcity', subcitySchema);