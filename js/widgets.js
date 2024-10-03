// Charles / 8994994, Valentine / 8994110, Blessing / 8932413, Chinedu / 8994158

/*jshint esversion: 6 */

$(document).ready(function () {
    // Accordion UI widget initialization & configuration
    $("#accordion").accordion({
      collapsible: true,
      active: false,
    });
  
    // Dialog UI widget initialization & configuration
    $("#dialog").dialog({
      autoOpen: false,
      height: "auto",
      width: 400,
      modal: true,
      draggable: false,
      show: {
        effect: "blind",
        duration: 1000,
      },
      hide: {
        effect: "explode",
        duration: 1000,
      },
    });
  });
  