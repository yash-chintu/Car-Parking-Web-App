const express = require("express");
const router = express.Router();
const City = require("../models/city");
const Subcity = require("../models/subcity");


router.route("/home").get(async (req, res) => {
    const cities = await City.find().populate('sub_cities');
    res.render("admin/home",{cities});
});

router.route("/addCity").post(async (req, res) => {
    const { name } = req.body;
    const city = new City({ name });
    await city.save();
    res.redirect("/admin/home");
});

router.route("/addArea").post(async (req, res) => {
    const { city, name, maxCapacity } = req.body;
    const parCity = await City.findById(city);
    const subcity = new Subcity({ name, maxCapacity, parCityName: parCity.name });
    await subcity.save();
    parCity.sub_cities.push(subcity);
    await parCity.save();
    res.redirect("/admin/home");
});

module.exports = router;