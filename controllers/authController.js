"use strict";

var jwt = require("jsonwebtoken");

var config = require("../config/config.js"),
  db = require("../services/database.js"),
  models = require("../models");

// The authentication controller.
var AuthController = {};

// Register a user.
AuthController.signUp = function(req, res) {
  // TODO: Register new users.
  //checks if username and passowrd are on the request body
  //could ask the user for a second password and make sure both are identical before moving on
  //could do any checks we want
  if (!req.body.username || !req.body.password) {
    res.json({ message: "Please provide a username and a password." });
  } else {
    db.sync()
      .then(function() {
        var newUser = {
          username: req.body.username,
          password: req.body.password
        };

        //res.redirect("redirectHere") - by default always redirects to a get

        //successful user creation
        return models.Admin.create(newUser).then(function() {
          res.status(201).json({ message: "Account created!" });
        });
        //let the user know about a problem with making their account
      })
      .catch(function(error) {
        console.log(error);
        res.status(403).json({ message: "Username already exists!" });
      });
  }
};

AuthController.authenticateUser = function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(404).json({ message: "Username and password are needed!" });
  } else {
    var username = req.body.username,
      password = req.body.password,
      potentialUser = { where: { username: username } };

    models.Admin.findOne(potentialUser)
      .then(function(bucket) {
        if (!bucket) {
          res.status(404).json({ message: "Incorrect Username" });
        } else {
          bucket.comparePasswords(password, function(error, isMatch) {
            if (isMatch && !error) {
              var token = jwt.sign(
                { username: bucket.username },
                config.keys.secret,
                { expiresIn: "30m" }
              );

              res.json({ success: true, token: "JWT " + token });
              console.log(token);
            } else {
              res.status(404).json({ message: "Incorrect Password" });
            }
          });
        }
      })
      .catch(function(error) {
        console.log(error);
        res.status(500).json({ message: "What the balls?!" });
      });
  }
};

module.exports = AuthController;
