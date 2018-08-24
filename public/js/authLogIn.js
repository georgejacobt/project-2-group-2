
$(document).ready(function () {

    $("#adminSubBtn").on("click", function (event) {
        event.preventDefault();
        const samName = $("#adminUsername").val().trim();
        const samPW = $("#adminPW").val().trim();
        const samLogsIn = {
            username: samName,
            password: samPW
        }

        if (!samLogsIn.username || !samLogsIn.password) {
            return;
        }

        loginUser(samLogsIn.username, samLogsIn.password);
        $("#adminUsername").val("");
        $("#adminPW").val("");

        function loginUser(username, password) {
            $.post("/api/login", {
                username: username,
                password: password
            }).then(function (data) {
                window.location.replace(data);
                // If there's an error, log the error
            }).catch(function (err) {
                console.log(err);
            });
        }


        // $.ajax("/api/authenticate", {
        //     type: "POST",
        //     data: samLogsIn
        // }).then( function(event){
        //     const token = event.token;
        //     console.log("i;m a token", token);

        //     $.ajax("/api/hello", {
        //         type: "GET",
        //         headers: {
        //         Authorization: token
        //         }
        //     }).then(function(event){
        //         console.log("i'm a status", event)
        //         location.href=event.location
        //         // if(event.status===200){
        //         //     // exports.modules = "use this"
        //         //     // location.href="/admin"
        //         // } else {
        //         //     alert("you're not authorized to be here")
        //         // }
        //     })
        // })
    })
})