/*jshint esversion: 6 */

$(document).ready(function () {
  // Hamburger menu onclick event to toggle the nav menu
  $("#hamburger_menu").on("click", () => {
    $("nav").slideToggle();
  });
});
