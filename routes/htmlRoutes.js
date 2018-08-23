var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
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
  });

  // Load dashboard and data
  app.get("/admin", function(req, res) {
    db.User.findAll({ where: { status: "new" } }).then(function(dbUser) {
      res.render("admin/dashboard", {
        data: dbUser
      });
    });
  });
  // Load profile page and pass in an user by id
  app.get("/userProfileAdmin/:id", function(req, res) {
    db.User.findOne({
      where: { id: req.params.id }
    }).then(function(dbUser) {
      res.render("admin/userProfileAdmin", {
        data: dbUser
      });
      console.log(dbUser);
    });
  });
  // Pet/Home form for user ID.
  app.get("/formPet/:id", function(req, res) {
    res.render("admin/formPet", {
      data: req.params.id
    });
  });
  app.get("/formHome/:id", function(req, res) {
    res.render("admin/formHome", {
      data: req.params.id
    });
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
  });
  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
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
