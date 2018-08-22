const accountSid = "ACa29ede4ca37752de8a842305afbcbb92";
const authToken = "f4fdc75b013c0ad7ececa637024543d1";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body:
      "How about this..from your sams app-George..btw reply back deoesnt work..yet :)",
    from: "+17177884823",
    to: "+17134164718"
  })
  .then(message => console.log(message.sid))
  .done();
