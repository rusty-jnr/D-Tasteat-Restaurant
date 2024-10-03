/*jshint esversion: 6 */

$(document).ready(() => {
  // event handler for form submission
  $("#reservation").submit((evt) => {
    // prevent the default action when a form is submitted
    evt.preventDefault();

    let isValid = true;

    //vaildate name
    const name = $("#name").val().trim();
    if (!name) {
      $("#name").next().text("Your Name is Required.");
      isValid = false;
    } else if (name.length < 6) {
      $("#name").next().text("Please Enter your Full Name.");
      isValid = false;
    } else {
      $("#name").next().text("");
    }

    // validate email
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}\b/;
    const email = $("#email").val().trim();
    if (!email) {
      $("#email").next().text("This field is required");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $("#email").next().text("Must be a valid email address.");
      isValid = false;
    } else {
      $("#email").next().text("");
    }

    //validate phone number
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const phone = $("#phone").val().trim();
    if (!phone) {
      $("#phone").next().text("Phone number is required.");
      isValid = false;
    } else if (phone && !phonePattern.test(phone)) {
      $("#phone").next().text("Use 999-999-9999 format.");
      isValid = false;
    } else {
      $("#phone").next().text("");
    }

    //validate date
    const date = $("#date").val();
    //get today's date for comparison
    const currentDate = new Date();
    if (!date || new Date(date) <= currentDate) {
      $("#date").next().text("Please pick a future date");
      isValid = false;
    } else {
      $("#date").next().text("");
    }

    //validate time
    const time = $("#time").val();
    if (!time) {
      $("#time").next().text("Please choose a time.");
      isValid = false;
    } else {
      // check if time is past 10:00 PM by split into hours and minutes and convert into number;
      const [hours, minutes] = time.split(":").map(Number);
      if (hours > 22 || (hours == 22 && minutes > 0)) {
        $("#time")
          .next()
          .text("Store is closed. Reservation can't be made after 10pm.");
        isValid = false;
      } else {
        $("#time").next().text("");
      }
    }

    //validate guests
    const guest = $("#guests").val();
    if (guest < 1) {
      $("#guests").next().text("Number of Guests should be atleast one.");
      isValid = false;
    } else {
      $("#guests").next().text("");
    }

    //vaidate special request
    const requestMessage = $("#requests").val().trim();
    if (requestMessage.trim() && requestMessage.length < 50) {
      $("#requests")
        .next()
        .text("Please enter a message more than 50 characters.");
      isValid = false;
    } else {
      // no error message if the textarea is empty
      $("#requests").next().text("");
    }

    // vaildate that the user select an occasion other than placeholder.
    const occasion = $("#occasion").val();
    if (!occasion) {
      $("#occasion").next().text("Please select an occasion.");
      isValid = false;
    } else {
      $("#occasion").next().text("");
    }

    //vaildate confirmation method
    const confirmation = $("#confirmation").val();
    if (!confirmation) {
      $("#confirmation").next().text("Please select your preferred confirmation method.");
      isValid = false;
    } else {
      $("#confirmation").next().text("");
    }

    //If all fields are valid, show a confirmation alert and reset the form
    if (isValid) {
      //reset the form fields
      $("#reservation")[0].reset(); // reset the form
      $("#dialog").dialog("open"); // open the dialog box
      setTimeout(() => {
        $("#dialog").dialog("close"); // close the dialog box after 5 seconds using setTimeout
      }, 5000);
    }
  });
});
