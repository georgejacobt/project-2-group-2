var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/datacenter", function(req, res) {
    dataset = req.body.csvData;
    console.log(dataset[0]);
    console.log(typeof dataset);
    res.json("dbcreated");

    for (var i = 0; i < dataset.length - 1; i++) {
      db.Admin.create(dataset[i]).then(function() {
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
};
