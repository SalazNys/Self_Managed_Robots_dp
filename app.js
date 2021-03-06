const express = require("express")
const mustacheExpress = require("mustache-express")
const path = require("path")
const data = require("./models/data")
const app = express()
const indexRoute = require("./routes/index");
const passport = require("passport");
const userRoute = require("./routes/users");
const bodyParser = require("body-parser");

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")
app.set("port", 3000)
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, "public")))
app.use(passport.initialize());
app.use(passport.session());
app.use("/", indexRoute)
app.use("/users", userRoute);


// Start a db connect and list after it's connected.
require("./dbConnection")

app.listen(app.get("port"), err => {
  if (err) {
    throw err
    exit(1)
  }
  console.log(
    `Node running in ${app.get("env")} mode @ http://localhost:${app.get("port")}`
  )
})
