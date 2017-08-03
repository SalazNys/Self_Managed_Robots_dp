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
  console.log("REQBODY", req.body);
  console.log(req.body);
  new Robots(req.body).save()
    .then((result) => {
      res.redirect("/");
      let array = req.body.skills;

      let arraySplit = array.split(",");
      console.log("arraySplit");
    })
    .catch(() => {
      console.log("");
    })
})

module.exports = router;
