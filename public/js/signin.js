$(document).ready(function() {
  var loginForm = $("#signin");
  var emailInput = $("#signin_email");
  var passwordInput = $("#signin_password");

  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    // validate there's an email/password entered on submit //
    if (!userData.email || !userData.password) {
      return;
    }

    // if validated, run loginUser and clear form //
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser posts to api/login route - if successful, redirects us to the members dash
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }
});
