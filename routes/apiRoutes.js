var db = require("../models");
const MessagingResponse = require('twilio').twiml.MessagingResponse;

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Twillo Post
  var counter = 0;
  app.post("/sms", (req, res) => {
    const twiml = new MessagingResponse();
    let from = req.body.From;
    let body = req.body.Body;
    console.log (from);
    console.log(body);

    if (counter === 0){
      twiml.message("Hi, Welcome! Are you looking for pet care , home sitting or both..?");
      counter = counter +1;
    }
    else {
      if (counter === 1 & body === "pet care"){
        twiml.message("Great, we offer excellent pet care options, woould you like for sam to call you back for a meet and greet..");
        counter =  counter + 1;
      }

    }
      if (counter === 2 & body === "yes" ){
        twiml.message("OK, I wil have Sam call you back at "+from);
        counter =  counter + 1;
        }
      
    console.log(counter);

    

    

   


    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
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

// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message('Hi, Welcome! Are you looking for pet care , home sitting or both..?');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });



};



