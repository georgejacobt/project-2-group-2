"use strict";

const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("../config/config.js");
const models = require("../models");

// Hooks the JWT Strategy.
// Hooks the JWT Strategy.
function hookJWTStrategy(passport) {
  const options = {};

  options.secretOrKey = config.keys.secret;
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  options.ignoreExpiration = false;

  passport.use(
    new JWTStrategy(options, function(JWTPayload, callback) {
      models.Admin.findOne({ where: { username: JWTPayload.username } }).then(
        function(user) {
          if (!user) {
            callback(null, false);
            return;
          }
          console.log("I'm using this strategy!");
          callback(null, user);
        }
      );
    })
  );
}

module.exports = hookJWTStrategy;
