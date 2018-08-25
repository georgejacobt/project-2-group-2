// Get references to page elements
var $firstName = $("#firstName");
var $lastName = $("#lastName");
var $cellNumber = $("#cellNumber");
var $emailAddress = $("#emailAddress");
var $userName = $("#userName");
var $submitBtn = $("#submitUser");


// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(user)
    });
  }
};

// handleFormSubmit is called whenever we submit a new user
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    firstName: $firstName.val().trim(),
    lastName: $lastName.val().trim(),
    cellNumber: $cellNumber.val().trim(),
    emailAddress: $emailAddress.val().trim(),
    status: "new",
    userName: $userName.val().trim(),
    password: null
  };

  if (
    !(
      user.firstName &&
      user.lastName &&
      user.cellNumber &&
      user.emailAddress &&
      user.userName
    )
  ) {
    alert("You must enter all user data!");
    return;
  }

  API.saveUser(user).then(function() {
    console.log(user);
  });

  $("#firstName").empty();
  $("#lastName").empty();
  $("#cellNumber").empty();
  $("#emailAddress").empty();
  $("#userName").empty();

  window.location.replace("subSuccess");
  console.log("below subsucess");
};

// Add event listeners to the submit button
$submitBtn.on("click", handleFormSubmit);
