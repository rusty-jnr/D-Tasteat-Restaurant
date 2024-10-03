// Blessing / 8932413

/*jshint esversion: 6 */

$(document).ready(() => {
  const validateForm = () => {
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let subject = $("#subject").val().trim();
    let message = $("#message").val().trim();
    let isValid = true;

    //name validation
    if (!name) {
      $("#name").next().text("This field is required");
      isValid = false;
    } else {
      $("#name").next().text("");
    }

    //email validation
    if (!email) {
      $("#email").next().text("This field is required");
      isValid = false;
    } else {
      let emailValid =
        /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!emailValid.test(email)) {
        $("#email").next().text("Please enter a valid email address");
        isValid = false;
      } else {
        $("#email").next().text("");
      }
    }

    //subject validation
    if (!subject) {
      $("#subject").next().text("This field is required");
      isValid = false;
      //character limit
    } else if (subject.length > 50) {
      $("#subject").next().text("Subject cannot exceed 50 characters");
      isValid = false;
    } else {
      $("#subject").next().text("");
    }

    //phone validation
    if (!phone) {
      $("#phone").next().text("This field is required");
      isValid = false;
    } else {
      let phoneValid = /^[+]?[0-9]*$/;
      if (!phoneValid.test(phone)) {
        $("#phone").next().text("Please enter a valid phone number");
        isValid = false;
      } else {
        $("#phone").next().text("");
      }
    }

    //message validation
    if (!message) {
      $("#message").next().text("This field is required");
      isValid = false;
    } else {
      $("#message").next().text("");
    }

    return isValid;
  };

  // event handler for contact-us form submission
  $("#contactUsForm").on("submit", (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      $("#contactUsForm")[0].reset(); //reset form
      $("#dialog").dialog("open"); // open dialog box
      setTimeout(() => {
        $("#dialog").dialog("close"); // close dialog box after 5 seconds using setTimeout
      }, 5000);
    }
  });
});
