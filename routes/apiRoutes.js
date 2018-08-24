var db = require("../models");

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
  //Get completed payments
  app.get("/api/revenue", function(req, res) {
    db.Appointment.findAll({ where: { complete: 1 } }).then(function(
      dbAppointment
    ) {
      let payedPets = [];
      let petTotal = 0;
      let payedHomes = [];
      let homeTotal = 0;

      for (let i = 0; i < dbAppointment.length; i++) {
        //dbAppointment[i].date = convertToShortDate(dbAppointment[i].date);
        if (dbAppointment[i].type === false) {
          payedPets.push(dbAppointment[i]);
          petTotal += parseFloat(dbAppointment[i].rate, 11);
        } else {
          payedHomes.push(dbAppointment[i]);
          homeTotal += parseFloat(dbAppointment[i].rate, 11);
        }
      }
      let obj = {
        pets: payedPets,
        homes: payedHomes,
        petTotal: petTotal,
        homeTotal: homeTotal
      };
      res.render("payments", obj);
    });
  });
};
