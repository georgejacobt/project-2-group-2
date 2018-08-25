$(document).ready(function() {
  
    $("#newSubBtn").on("click", function (event) {
        event.preventDefault();
        const newName = $("#newAdmin").val().trim();
        const newPW = $("#newAdminPW").val().trim();
        const samLogsIn = {
            username: newName,
            password: newPW
        }
  
      if (!samLogsIn.username || !samLogsIn.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(samLogsIn.username, samLogsIn.password);
    //   newName.val("");
    //   newPW.val("");
    });
  
    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(username, password) {
      $.post("/api/signup", {
        username: username,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  