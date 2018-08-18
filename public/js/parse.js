// $(".parse").on("click", function() {
//   var newFilePath = {
//     path: $("#filepath")
//       .val()
//       .trim()
//   };
//   console.log(newFilePath.path);
// });

var csvData;

function handleFileSelect(evt) {
  var file = evt.target.files[0];

  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      csvData = results.data;
      console.log(csvData);
    }
  });
}

$(document).ready(function() {
  $("#csv-file").change(handleFileSelect);
  $("#csv-file-submit").on("click", function() {
    console.log(" CSV Data Here:" + csvData.length);
    for (var i = 0; i < csvData.length - 1; i++) {
      console.log(csvData[i].CustomerName);
    }
  });
});
