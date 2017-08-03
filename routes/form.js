const express = require("express");
const router = express.Router();
const Robots = require("../models/data");

router.get("/form", (req, res) => {
  Robots.find()
  .then((data) => {
    res.render("form", { users : data });
    console.log("Is this working?");
  })
});

router.post("/newRobot", (req, res) => {
  new Robots(req.body).save()
    .then((mongoObj) => {
      res.send(mongoObj)
    })
})

module.exports = router;
