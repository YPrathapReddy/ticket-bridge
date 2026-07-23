let loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
  window.location.href = "home.html";
}

let loginForm = document.getElementById("loginForm");
let email = document.getElementById("email");
let password = document.getElementById("password");

// Prefill email after successful registration
let lastRegisteredEmail = localStorage.getItem("lastRegisteredEmail");

if (lastRegisteredEmail) {
  email.value = lastRegisteredEmail;
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let currentUser = users.find(
    (user) => user.email === email.value.trim().toLowerCase(),
  );

  if (!currentUser) {
    alert("Email is not registered.");
    return;
  }

  if (currentUser.password !== password.value) {
    alert("Incorrect password.");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(currentUser));

  localStorage.removeItem("lastRegisteredEmail");


  window.location.href = "home.html";
});
