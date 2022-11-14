const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sub_cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcity',
        default: null
    }]
    
})

// const City = mongoose.model('User', citySchema);

// module.exports = City;

module.exports = mongoose.models.City || mongoose.model('City', citySchema);