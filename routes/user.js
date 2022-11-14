const express = require("express");
const router = express.Router();
const User = require("../models/user");
const City = require("../models/city");
const Subcity = require("../models/subcity");

router.route("/home/:id").get(async (req, res) => {
    user_id = req.params.id;
    const user = await User.findById(user_id).populate("carLocation");
    const cities = await City.find().populate('sub_cities');
    // console.log(cities);
    var cities_str = JSON.stringify(cities);
    res.render("user/home",{user,cities_str});
});

router.route("/:id/park").post(async (req, res) => {
    user_id = req.params.id;
    const user = await User.findById(user_id);
    const subcity = await Subcity.findById(req.body.subcity_id);
    user.carLocation = subcity;
    subcity.currentCapacity += 1;
    await user.save();
    await subcity.save();
    res.redirect(`/user/home/${user_id}`);
});

router.route("/:id/leave").post(async (req, res) => {
    user_id = req.params.id;
    const user = await User.findById(user_id);
    const subcity = await Subcity.findById(user.carLocation);
    user.carLocation = null;
    subcity.currentCapacity -= 1;
    await user.save();
    await subcity.save();
    res.redirect(`/user/home/${user_id}`);
});




module.exports = router;