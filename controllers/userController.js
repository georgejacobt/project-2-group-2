"use strict";

// The user controller.
var UserController = {
  adminPage: function(req, res) {
    if (error) {
      throw error;
    }
    res.status(200).json({
      message: "Welcome to the users area " + req.user.username + "!"
    });
  }
};

module.exports = UserController;
