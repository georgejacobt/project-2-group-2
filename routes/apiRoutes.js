const db = require("../models");
// const config = require("../config/config.js");
const router = require("express").Router();
const AuthController = require("../controllers/authController.js");
const jwt = require("jsonwebtoken");

const APIAdminRoutes = function(passport) {
  console.log(passport.authenticate);
  router.post("/signup", AuthController.signUp);
  router.post("/authenticate", AuthController.authenticateUser);
  router.get(
    "/adminPage",
    passport.authenticate("jwt", { session: false }),
    allowOnly(config.accessLevels, UserController.index)
  );
  // router.get(
  //   "/adminPage",
  //   passport.authenticate("jwt", { session: false }),
  //   allowOnly(config.accessLevels, AdminController.index)
  // );

  return router;
};

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/admin", function(req, res) {
    db.User.findAll({ where: { status: "new" } }).then(function(dbUser) {
      res.json(dbUser);
      console.log(dbUser);
      for (let i = 0; i < dbUser.length; i++) {
        console.log(JSON.stringify(dbUser[i]));
      }
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
}

// APIAdminRoutes;
