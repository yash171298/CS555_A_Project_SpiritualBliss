// const mainRoutes = require('./routes');
const productsRoutes = require("./products");
const path = require("path");
const userRoutes = require("./users.js");


const constructorMethod = (app) => {
  
  app.use("/", productsRoutes);
  app.use("/users", userRoutes);
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
