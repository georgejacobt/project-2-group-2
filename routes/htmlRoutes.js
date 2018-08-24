var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  app.get("/petpricing", function(req, res) {
    res.render("petPricing");
  });
  app.get("/aboutme", function(req, res) {
    res.render("aboutMe");
  });
  app.get("/homepricing", function(req, res) {
    res.render("homePricing");
  });
  app.get("/samLogIn", function(req, res) {
    res.render("samLogIn");
  });

  app.get("/formUser", function(req, res) {
    res.render("formUser", {
      msg: "Welcome!"
    });
  });
  app.get("/subSuccess", function(req, res) {
    res.render("subSuccess", {
      msg: "Welcome!"
    });
  });

  // Load dashboard and data
  app.get("/admin", isAuthenticated, function(req, res) {
    db.User.findAll({ where: { status: "new" } }).then(function(dbUser) {
      res.render("dashboard", {
        data: dbUser
      });
    });
  });
  app.get("/formPet", function(req, res) {
    res.render("formPet");
  });
  // Load datacenter page

  app.get("/api/datacenter", function(req, res) {
    res.render("datacenter", {
      msg: "Welcome!"
    });
  });
  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });

    // Create a new user
    app.post("/api/user", function(req, res) {
      db.User.create(req.body).then(function(dbUsers) {
        res.json(dbUsers);
      });
    });
  });

  /* STARTER CODE 

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  */

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.send("YOU HIT CATCH ALL!");
  // });
};
