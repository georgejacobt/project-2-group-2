var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    res.render("index", {
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

  // Load datacenter page

  app.get("/api/datacenter", function(req, res) {
    res.render("datacenter", {
      msg: "Welcome!"
    });
  });

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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
