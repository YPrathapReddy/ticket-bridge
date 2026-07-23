let loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
  window.location.href = "login.html";
}

let selectedTicket = JSON.parse(localStorage.getItem("selectedTicket"));

let ticketSource = localStorage.getItem("ticketSource");


let ticketSourceHeading = document.getElementById("ticketSourceHeading");
let ticketHeading = document.getElementById("ticketHeading");
let operator = document.getElementById("operator");
let ticketNumber = document.getElementById("ticketNumber");
let fromPlace = document.getElementById("fromPlace");
let toPlace = document.getElementById("toPlace");
let travelDate = document.getElementById("travelDate");
let seatNumber = document.getElementById("seatNumber");
let originalPrice = document.getElementById("originalPrice");
let resalePrice = document.getElementById("resalePrice");
let youSave = document.getElementById("youSave");
let description = document.getElementById("description");
let ticketImage = document.getElementById("ticketImage");

ticketHeading.textContent =
  selectedTicket.ticketType.charAt(0).toUpperCase() +
  selectedTicket.ticketType.slice(1) +
  " Ticket";

operator.textContent = selectedTicket.operator;
ticketNumber.textContent = selectedTicket.ticketNumber;
fromPlace.textContent = selectedTicket.fromPlace;
toPlace.textContent = selectedTicket.toPlace;
travelDate.textContent = selectedTicket.travelDate;
seatNumber.textContent = selectedTicket.seatNumber;
originalPrice.textContent = "₹" + selectedTicket.originalPrice;
resalePrice.textContent = "₹" + selectedTicket.resalePrice;
description.textContent =
  selectedTicket.description || "No desrciption provided.";
youSave.textContent =
  "₹" + (selectedTicket.originalPrice - selectedTicket.resalePrice);

let buyButton = document.getElementById("buyButton");

let deleteButton = document.getElementById("deleteButton");

let editButton = document.getElementById("editButton");

let priceSection = document.getElementById("priceSection");

// let paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));

if (ticketSource === "purchased") {
  ticketSourceHeading.textContent = "Purchased Ticket";

  priceSection.innerHTML = `
    <p><strong>Amount Paid:</strong> ₹${selectedTicket.amountPaid}</p>
    <p><strong>Purchase Status:</strong> ${selectedTicket.purchaseStatus}</p>
`;
}

if (ticketSource === "search") {
  ticketSourceHeading.textContent = "Ticket for Sale";
  buyButton.addEventListener("click", function (event) {
    window.location.href = "checkout.html";
  });
} else {
  buyButton.classList.add("hidden");
}

if (ticketSource === "uploaded") {
  ticketSourceHeading.textContent = "Uploaded Ticket";
  // TODO: Implement delete ticket functionality
  deleteButton.addEventListener("click", function (event) {
    let isConfirmed = confirm("Are you sure you want to delete this ticket?");
    if (!isConfirmed) {
      return;
    }
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    let ticketIndex = tickets.findIndex(
      (ticket) => ticket.ticketNumber === selectedTicket.ticketNumber,
    );
    if (ticketIndex !== -1) {
      tickets.splice(ticketIndex, 1);
      localStorage.setItem("tickets", JSON.stringify(tickets));
    }
    alert("Ticket deleted successfully!");
    window.location.href = "myTickets.html";
  });

  editButton.addEventListener("click", function (event) {
    localStorage.setItem("editTicket", JSON.stringify(selectedTicket));

    window.location.href = "uploadTicket.html";
  });
} else {
  deleteButton.classList.add("hidden");
  editButton.classList.add("hidden");
}
