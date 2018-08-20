var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    res.render("index", {
      msg: "Welcome!"
    });
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
=======
    res.render("index");
  });

  app.get("/petpricing", function(req, res) {
    res.render("petPricing");
  });

  app.get("/aboutme", function(req, res) {
    res.render("aboutMe");
  });

  app.get("/homepricing", function(req, res) {
    res.render("homePricing");
>>>>>>> f8d053a0ef3d8d0eac6d2e1ae7224751d290c942
  });

  // Load dashboard and data
  app.get("/admin", function(req, res) {
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

  app.get("/datacenter", function(req, res) {
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
  app.get("*", function(req, res) {
    res.render("404");
  });
};
