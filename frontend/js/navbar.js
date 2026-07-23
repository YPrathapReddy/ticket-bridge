let homeLink = document.getElementById("homeLink");
let searchLink = document.getElementById("searchLink");
let uploadLink = document.getElementById("uploadLink");
let myTicketsLink = document.getElementById("myTicketsLink");

// Home
if (homeLink) {
  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "home.html";
  });
}

// Search
if (searchLink) {
  searchLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "home.html";
  });
}

// Upload Ticket
if (uploadLink) {
  uploadLink.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("editTicket");
    window.location.href = "uploadTicket.html";
  });
}

// My Tickets
if (myTicketsLink) {
  myTicketsLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "myTickets.html";
  });
}

//log out
let logoutLink = document.getElementById("logoutLink");

if (logoutLink) {
  logoutLink.addEventListener("click", function (event) {
    event.preventDefault();

    let isConfirmed = confirm("Are you sure you want to logout?");

    if (!isConfirmed) {
      return;
    }

    localStorage.removeItem("loggedInUser");

    alert("Logged out successfully!");

    window.location.href = "login.html";
  });
}