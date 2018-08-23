// const db = require("../models");

// const config = require("../config/config.js");
const router = require("express").Router();
const AuthController = require("../controllers/authController.js");
const UserController = require("../controllers/userController.js");
const allowOnly = require("../services/routesHelper.js").allowOnly;
// const jwt = require("jsonwebtoken");

const APIAdminRoutes = function(passport) {
  router.post("/signup", AuthController.signUp);
  router.post("/authenticate", AuthController.authenticateUser);
  router.get(
    "/adminPage",
    passport.authenticate("jwt", { session: false }),
    allowOnly(UserController.adminPage)
  );

  return router;
};

module.exports = APIAdminRoutes;
