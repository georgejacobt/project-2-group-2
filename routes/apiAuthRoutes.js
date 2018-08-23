const db = require("../models");

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

  return router;
};

// APIAdminRoutes;
module.exports = APIAdminRoutes;
