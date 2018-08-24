// Get references to page elements
var $street_address1 = $("#street_address1");
var $street_address2 = $("#street_address2");
var $city = $("#breed");
var $state = $("#age");
var $zip = $("#allergies");
var $emergContFirstName = $("#medication");
var $emergContLastName = $("#health_issues");
var $emergContLastPhone = $("#health_issues");
var $gateCode = $("#gateCode");
var $doorCode = $("#");
var $alarmCode = $("#");
var $keyInstructions = $("#");
var $wifiPassword = $("#");
var $submitHome = $("#submitHome");
var $userID = $("#user_id").val();
 
// The API object contains methods for each kind of request we'll make
var API = {
  saveHome: function(home) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/home",
      data: JSON.stringify(home)
    });
  }
};

// handleFormSubmit is called whenever we submit a new home
// Save the new home to the db and refresh the list

var handleHomeSubmit = function(event) {
  event.preventDefault();
  var home = {
    streetAddress1: $street_address1.val().trim(),
    streetAddress2: $street_address2.val().trim(),
    city: $city.val().trim(),
    state: $state.val().trim(),
    zip: $zip.val().trim(),
    emergContFirstName: $emergContFirstName.val().trim(),
    emergContLastName: $emergContLastName.val().trim(),
    emergContLastPhone: $emergContLastPhone.val().trim(),
    gateCode: $gateCode.val().trim(),
    doorCode: $doorCode.val().trim(),
    alarmCode: $alarmCode.val().trim(),
    keyInstructions: $keyInstructions.val().trim(),
    wifiPassword: $wifiPassword.val().trim(),
    user_id: $userID.val.trim()
   };

 

  if (
    !(
      home.street_address1 &&
      home.city &&
      home.zip &&
      home.state&&
      emergContLastPhone
    )
  ) {
    alert("You must enter all  required home data! (Street Address, City, State, Zip and Emergency Contact! ");
    return;
  }
  API.saveHome(home).then(function() {
    console.log(home);
  });
  window.location.replace("/admin/");
};

// Add event listeners to the submit button
$submitHome.on("click", handleHomeSubmit);

 