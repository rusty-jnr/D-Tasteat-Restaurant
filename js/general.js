// Charles / 8994994, Valentine / 8994110, Blessing / 8932413, Chinedu / 8994158

/*jshint esversion: 6 */

$(document).ready(function () {
  // Hamburger menu onclick event to toggle the nav menu
  $("#hamburger_menu").on("click", () => {
    $("nav").slideToggle();
  });
});
