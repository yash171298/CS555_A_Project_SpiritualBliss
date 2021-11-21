
const express = require("express");
const app = express();
const static = express.static(__dirname + "/public");
const session = require("express-session");
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");


app.use("/public", static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.engine("handlebars", handlebarsInstance.engine);

app.set("view engine", "handlebars");
app.use(
  session({
    name: "AuthCookie",
    secret: "Some secret",
    saveUninitialized: true,
    resave: false,
    cartItems: [],
  })
);

app.use("/users/details", async (req, res, next) => {
  if (req.session.user) {
    // TODO: need to implement error file to reDirect or render
    next();
  } else {
    return res.render("pages/loginPage", { title: "first time" });
  }
});

app.use((req, res, next) => {
  date = new Date();
  console.log(
    `[${date.toUTCString()}]:\t${req.method}\t${req.originalUrl}\t\t${
      req.session.user ? "(Authenticated)" : "(Not Authenticated)"
    }`
  );
  next();
});

app.use((req, res, next) => {
  date = new Date();
  console.log(
    `[${date.toUTCString()}]:\t${req.method}\t${req.originalUrl}\t\t${
      req.session.admin ? "(Admin Authenticated)" : "(Admin Not Authenticated)"
    }`
  );
  next();
});



configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});

