"use strict";

var JWTStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var Admins = require("./../models/admin.js"),
  config = require("../config/config.js");

// Hooks the JWT Strategy.
// Hooks the JWT Strategy.
function hookJWTStrategy(passport) {
  var options = {};

  options.secretOrKey = config.keys.secret;
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  options.ignoreExpiration = false;

  passport.use(
    new JWTStrategy(options, function(JWTPayload, callback) {
      Admins.findOne({ where: { username: JWTPayload.username } }).then(
        function(user) {
          if (!user) {
            callback(null, false);
            return;
          }

          callback(null, user);
        }
      );
    })
  );
}

module.exports = hookJWTStrategy;
