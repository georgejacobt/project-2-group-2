var db = require("../models");
var passport = require("../services/passportStrategy");

module.exports = function(app) {
  //passport authenticate middleware with local strategy
  //valid login - go to admin, otherwise get an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    //send the user the route so it'll be redirected in the front end (can't post into a GET request from a POST)
    res.json("/admin");
  }),
  //if user is created successfully then log them in, otherwise send an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.Admin.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  }),
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  }),
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
  });
};
//Previous auth strategy

// const APIAdminRoutes = function(passport) {
//   router.post("/signup", AuthController.signUp);
//   router.post("/authenticate", AuthController.authenticateUser);
//   router.get(
//     "/hello",
//     passport.authenticate("jwt", { session: false }),
//     allowOnly(UserController.index)
//   );

//   return router;
// };

// module.exports = APIAdminRoutes;
