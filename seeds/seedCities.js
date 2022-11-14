const mongoose = require('mongoose');
const City = require('../models/city');

mongoose.connect('mongodb://localhost:27017/CarParking', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


    const seedCities = [
        {
            name: 'Vijayawada',
            sub_cities: ['63723774e1fe72114950b25a','63723774e1fe72114950b25b']   
        }
    ]


City.insertMany(seedCities)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })