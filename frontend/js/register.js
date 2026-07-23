let loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
  window.location.href = "home.html";
}

let registerForm = document.getElementById("registerForm");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let isDuplicate = users.some(
    (user) =>
      user.email.trim().toLowerCase() === email.value.trim().toLowerCase(),
  );

  if (isDuplicate) {
    alert("Email already registered.");
    return;
  }

  let currentUser = {
    fullName: fullName.value.trim(),
    email: email.value.trim().toLowerCase(),
    phone: phone.value.trim(),
    password: password.value,
  };

  users.push(currentUser);

  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("lastRegisteredEmail", currentUser.email);

  alert("Registration successful!");
  registerForm.reset();

  window.location.href = "login.html";
});
