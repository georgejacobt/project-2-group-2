require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const session = require("express-session");
// const sequelize = require("sequelize");
<<<<<<< HEAD
var passport = require("./services/passportStrategy");
=======
// const passport = require("passport");
// const jwt = require("jsonwebtoken");

//chuck some app related modules here
// const hookJWTStrategy = require("./services/passportStrategy.js");
>>>>>>> 307e5ee50781eaae997e65ef8892a6b17e01ec7d

const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

<<<<<<< HEAD
//starting passport and using sessions to keep track of user's log in status
app.use(
  session({ secret: "ALYSSA'S_SECRET", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
=======
//http request logger
app.use(morgan("dev"));

//hooking up passport
// app.use(passport.initialize());
// hookJWTStrategy(passport);
>>>>>>> 307e5ee50781eaae997e65ef8892a6b17e01ec7d

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
// console.log(passport.authenticate);
// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
<<<<<<< HEAD
require("./routes/apiAuthRoutes")(app);
=======
// app.use("/api", require("./routes/apiAuthRoutes.js")(passport));
>>>>>>> 307e5ee50781eaae997e65ef8892a6b17e01ec7d

const syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
