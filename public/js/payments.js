function convertToShortDate(date) {
  let newdate;
  newdate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return newdate;
}
$(function() {
  $(".formatThisDate").each(function() {
    $(this).text(convertToShortDate(new Date(this.textContent)));
  });
});
