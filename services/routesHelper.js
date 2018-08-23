"use strict";

//accessLevel and callback will be defined by us later
//the callback will be the controller method that needs to be called when the route is accessed
exports.allowOnly = function(callback) {
  console.log("i'm checking the user's role");

  function checkUserRole(req, res) {
    console.log("i'm actually chekcing the users role");
    //requested user role provided by the passport library
    //acts as middlware
    if (req.user.role !== 2) {
      res.sendStatus(403);
      return;
    }

    callback(req, res);
  }

  return checkUserRole;
};

//main page then log ineither admin or not - send based off that
