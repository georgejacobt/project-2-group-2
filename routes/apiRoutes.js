var db = require("../models");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
<<<<<<< HEAD

  // Twillo Post
  var counter = 0;
  app.post("/sms", (req, res) => {
    const twiml = new MessagingResponse();
    let from = req.body.From;
    let body = req.body.Body;
    console.log(from);
    console.log(body);

    if (counter === 0) {
      twiml.message(
        "Hi, Welcome! Are you looking for pet care , home sitting or both..?"
      );
      counter = counter + 1;
    } else {
      if ((counter === 1) & (body === "pet care")) {
        twiml.message(
          "Great, we offer excellent pet care options, woould you like for sam to call you back for a meet and greet.."
        );
        counter = counter + 1;
      }
    }
    if ((counter === 2) & (body === "yes")) {
      twiml.message("OK, I wil have Sam call you back at " + from);
      counter = counter + 1;
    }

    console.log(counter);

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  });

=======
>>>>>>> b0d084e0526f3832489c30db57cfdec92727650e
  app.get("/api/admin", function(req, res) {
    db.User.findAll({ where: { status: "new" } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // Create a new example
  app.post("/api/datacenter", function(req, res) {
    dataset = req.body.csvData;
    console.log(dataset[0]);
    console.log(typeof dataset);
    res.json("dbcreated");

    for (var i = 0; i < dataset.length - 1; i++) {
      db.User.create(dataset[i]).then(function() {
        // We have access to the new todo as an argument inside of the callback function
        // res.json(dbTodo);
        console.log("data inserted");
      });
    }
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
<<<<<<< HEAD

  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
=======
  /*
>>>>>>> b0d084e0526f3832489c30db57cfdec92727650e
  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  // Create a new pet
  app.post("/api/pet", function(req, res) {
    db.Pet.create(req.body).then(function(dbPet) {
      res.json(dbPet);
      console.log(dbPet);
    });
  });
  // Create a new home
  app.post("/api/home", function(req, res) {
    db.Home.create(req.body).then(function(dbHome) {
      res.json(dbHome);
      console.log(dbHome);
    });
  });
*/
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
