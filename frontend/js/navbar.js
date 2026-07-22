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
