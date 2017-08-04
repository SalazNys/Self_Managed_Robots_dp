const express = require('express');
const router = express.Router();
const User = require('../models/data');

router.get("/form", (req, res) => {
  User.find()
  .then((data) => {
    res.render("form", { users : data });
    console.log("Is this working?");
  })
});

router.post("/newRobot", (req, res) => {
  console.log(req.body);
  new User(req.body).save()
    .then((newUser) => {
      res.redirect(`/users/${newUser._id}`);
    })
    .catch(() => {
    })
})

router.get("/update", (req, res) => {
  User.find({ _id : req.params.id })
    .then((data) => {
      res.render("form", { users : data });
    })
})

router.get('/:id', function(req, res){
  User.findOne({ _id : req.params.id })
    .then((data) => {
      res.render('profile', data);
    });
})

module.exports = router;
