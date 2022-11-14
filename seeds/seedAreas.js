const mongoose = require('mongoose');
const Subcity = require('../models/subcity');

mongoose.connect('mongodb://localhost:27017/CarParking', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


    const seedAreas = [
        {
            name: 'benz circle',
            maxCapacity: 100
        },
        {
            name: 'bus stand',
            maxCapacity: 100
        }
    ]


Subcity.insertMany(seedAreas)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })