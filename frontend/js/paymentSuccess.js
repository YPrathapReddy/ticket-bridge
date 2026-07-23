
let loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
  window.location.href = "login.html";
}


let buyerInfo = JSON.parse(localStorage.getItem("buyerInfo")) || {};

// console.log(buyerInfo);

let selectedTicket = JSON.parse(localStorage.getItem("selectedTicket")) || {};

let paymentInfo = JSON.parse(localStorage.getItem("paymentInfo")) || {};

let buyerName = document.getElementById("buyerName");

let summaryTicketType = document.getElementById("summaryTicketType");
let operator = document.getElementById("operator");
let route = document.getElementById("route");
let travelDate = document.getElementById("travelDate");
let seatNumber = document.getElementById("seatNumber");
let ticketNumber = document.getElementById("ticketNumber");
let amountPaid = document.getElementById("amountPaid");


let myTicketsButton = document.getElementById("myTicketsButton");
let homeButton = document.getElementById("homeButton");


buyerName.textContent = buyerInfo.fullName;

summaryTicketType.textContent = `${selectedTicket.ticketType[0].toUpperCase()}${selectedTicket.ticketType.slice(1)} Ticket`;
operator.textContent = selectedTicket.operator;
route .textContent= `${selectedTicket.fromPlace} → ${selectedTicket.toPlace}`;
travelDate.textContent = selectedTicket.travelDate;
seatNumber.textContent = selectedTicket.seatNumber;
ticketNumber.textContent = selectedTicket.ticketNumber;
amountPaid.textContent = paymentInfo.totalAmount

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

let ticketIndex  = tickets.findIndex(ticket => ticket.ticketNumber===selectedTicket.ticketNumber);

let purchasedTickets = JSON.parse(localStorage.getItem("purchasedTickets")) || [];
if(ticketIndex !== -1){
    purchasedTickets.push({
      ...selectedTicket,
      amountPaid: paymentInfo.totalAmount,
      purchaseStatus: "Successful",
    });
    tickets.splice(ticketIndex, 1);
  localStorage.setItem("tickets", JSON.stringify(tickets));
  localStorage.setItem("purchasedTickets", JSON.stringify(purchasedTickets));
  
}


myTicketsButton.addEventListener("click", function () {
  window.location.href = "myTickets.html";
});

homeButton.addEventListener("click", function () {
  window.location.href = "home.html";
});
