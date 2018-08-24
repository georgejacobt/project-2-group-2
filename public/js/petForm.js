// Get references to page elements
var $name = $("#name");
var $type = $("#type");
var $breed = $("#breed");
var $age = $("#age");
var $allergies = $("#allergies");
var $medication = $("#medication");
var $health_issues = $("#health_issues");
var $feeding_instructions = $("#feeding_instructions");
var $vet_clinic_name = $("#vet_clinic_name");
var $vet_clinic_phone = $("#vet_clinic_phone");
var $vet_first_name = $("#vet_first_name");
var $vet_last_name = $("#vet_last_name");
var $submitPet = $("#submitPet");

// The API object contains methods for each kind of request we'll make
var API = {
  savePet: function(pet) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/pet",
      data: JSON.stringify(pet)
    });
  }
};

// handleFormSubmit is called whenever we submit a new pet
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var pet = {
    name: $name.val().trim(),
    type: $type.val().trim(),
    breed: $breed.val().trim(),
    age: $age.val().trim(),
    allergies: $allergies.val().trim(),
    medication: $medication.val().trim(),
    health_issues: $health_issues.val().trim(),
    feeding_instructions : $feeding_instructions.val().trim(),
    vet_clinic_name: $vet_clinic_name.val().trim(),
    vet_clinic_phone: $vet_clinic_phone.val().trim(),
    vet_first_name: $vet_first_name.val().trim(),
    vet_last_name: $vet_last_name.val().tri(),
   };

  if (
    !(
      pet.name &&
      pet.type &&
      pet.breed &&
      pet.age &&
      pet.allergies&&
      health_issues
    )
  ) {
    alert("You must enter all  required pet data! (Name, Type, Breed, Age, Allergies and Health Issues");
    console.log("You must enter all  required pet data! (Name, Type, Breed, Age, Allergies and Health Issues");
    return;
  }
  console.log(pet)
  API.savePet(pet).then(function() {
    console.log(pet);
  });
    window.location.replace("/subSuccess");
};


// Add event listeners to the submit button

$submitPet.on("click", handleFormSubmit);

 