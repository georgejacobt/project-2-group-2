var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });
  app.get("/formUser", function(req, res) {
    res.render("formUser");
  });
  app.get("/subSuccess", function(req, res) {
    res.render("subSuccess", {
      msg: "Welcome!"
    });
  });

  // Load dashboard and data
  app.get("/admin", function(req, res) {
    db.User.findAll({
      include: [
        {
          model: db.Pet
        },
        {
          model: db.Home
        }
      ]
    }).then(function(dbUser) {
      let USERS = [];
      let NEWUSERS = [];
      let HOMES = [];
      let PETS = [];
      for (let i = 0; i < dbUser.length; i++) {
        //New Users
        if (dbUser[i].status === "new") {
          let NEWUSER = {
            firstName: dbUser[i].firstName,
            lastName: dbUser[i].lastName,
            cellPhone: dbUser[i].cellPhone,
            emailAddress: dbUser[i].emailAddress,
            id: dbUser[i].id
          };
          NEWUSERS.push(NEWUSER);
        }
        //All Users
        let USER = {
          firstName: dbUser[i].firstName,
          lastName: dbUser[i].lastName,
          cellPhone: dbUser[i].cellPhone,
          emailAddress: dbUser[i].emailAddress,
          id: dbUser[i].id
        };
        USERS.push(USER);
        //Homes ordered by User
        if (dbUser[i].Homes.legth !== 0) {
          for (let y = 0; y < dbUser[i].Homes.length; y++) {
            let HOME = {
              street1: dbUser[i].Homes[y].streetAddress1,
              street: dbUser[i].Homes[y].streetAddress2,
              city: dbUser[i].Homes[y].city,
              state: dbUser[i].Homes[y].state,
              zip: dbUser[i].Homes[y].zip
            };
            HOMES.push(HOME);
          }
        }
        //Pets ordered by User
        if (dbUser[i].Pets.legth !== 0) {
          for (let y = 0; y < dbUser[i].Pets.length; y++) {
            let PET = {
              name: dbUser[i].Pets[y].name,
              type: dbUser[i].Pets[y].type,
              breed: dbUser[i].Pets[y].breed,
              age: dbUser[i].Pets[y].age,
              visitNumber: dbUser[i].Pets[y].visitNumber
            };
            PETS.push(PET);
          }
        }
      }
      console.log(PETS, HOMES);
      res.render("admin/dashboard", {
        USERS: USERS,
        NEWUSERS: NEWUSERS,
        HOMES: HOMES,
        PETS: PETS
      });
    });
  });
  // Load profile page and pass in an user by id
  app.get("/userProfileAdmin/:id", function(req, res) {
    db.User.findOne({
      include: [
        {
          model: db.Pet
        },
        {
          model: db.Home
        }
      ],
      where: { id: req.params.id }
    }).then(function(dbUser) {
      res.render("admin/userProfileAdmin", {
        data: dbUser
      });
    });
  });
  //Appointments
  app.get("/appointments", function(req, res) {
    db.Appointment.findAll({}).then(function(Appts) {
      console.log(Appts);
      res.render("admin/appointments", {
        data: Appts
      });
    });
  });
  app.get("/allPets", function(req, res) {
    db.Pet.findAll({}).then(function(Pets) {
      console.log(Pets);
      res.render("admin/allPets", {
        data: Pets
      });
    });
  });
  app.get("/allHomes", function(req, res) {
    db.Home.findAll({}).then(function(Homes) {
      console.log(Homes);
      res.render("admin/allHomes", {
        data: Homes
      });
    });
  });
  app.post("/approve/:id", function(req) {
    db.User.update({
      status: "approve",
      where: {
        id: req.body.id
      }
    }).then(function() {
      res.render("/admin");
    });
  });
  app.post("/decline/:id", function(req) {
    db.User.update({
      status: "decline",
      where: {
        id: req.body.id
      }
    }).then(function() {
      res.render("/admin");
    });
  });
  // Pet/Home form for user ID Update.
  app.get("/formPetUpdate/:id", function(req, res) {
    res.render("admin/formPet", {
      data: req.params.id
    });
  });
  app.get("/formHomeUpdate/:id", function(req, res) {
    res.render("admin/formHome", {
      data: req.params.id
    });
  });

  // Load datacenter page

  app.get("/datacenter", function(req, res) {
    res.render("datacenter", {
      msg: "Welcome!"
    });
  });
  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
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

  /* STARTER CODE 

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  */

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
