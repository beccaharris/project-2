$(document).ready(function() {
  var signUpForm = $("form#signup");
  var emailInput = $("input#signup_email");
  var passwordInput = $("input#signup_password");

  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    // validate there's an email/password entered on submit //
    if (!userData.email || !userData.password) {
      return;
    }
    // If validated, run signUpUser //
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to /api/signup - if successful redirect to the members dash
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
