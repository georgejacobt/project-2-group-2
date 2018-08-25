$("#datepicker_").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: true // Close upon selecting a date,
    });

$(".approve").on("click", function(){
    event.stopPropagation();
    var id = $(this).data("val");
    $.ajax({
      method: "POST",
      url: "/api/aprove/" + id
    }).then(getTodos);
}).then(function(){
    window.location.reload("admin")
});

$(".decline").on("click", function(){
    event.stopPropagation();
    var id = $(this).data("val");
    $.ajax({
      method: "POST",
      url: "/api/decline/" + id
    }).then(function(){
    window.location.reload("admin")
    })
});