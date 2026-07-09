let selectedTicket = JSON.parse(localStorage.getItem("selectedTicket"));

let ticketSource = localStorage.getItem("ticketSource");

console.log(ticketSource);


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
    selectedTicket.ticketType.charAt(0).toUpperCase()+
    selectedTicket.ticketType.slice(1)+ " Ticket";

operator.textContent = selectedTicket.operator;
ticketNumber.textContent = selectedTicket.ticketNumber;
fromPlace.textContent = selectedTicket.fromPlace;
toPlace.textContent = selectedTicket.toPlace;
travelDate.textContent = selectedTicket.travelDate;
seatNumber.textContent = selectedTicket.seatNumber;
originalPrice.textContent = "₹" + selectedTicket.originalPrice;
resalePrice.textContent = "₹" + selectedTicket.resalePrice;
description.textContent = selectedTicket.description || "No desrciption provided.";
youSave.textContent = "₹"+(selectedTicket.originalPrice - selectedTicket.resalePrice);

let buyButton = document.getElementById("buyButton");

let deleteButton = document.getElementById("deleteButton");

if(ticketSource==="search"){
buyButton.addEventListener("click", function(event){

    window.location.href = "checkout.html";
});
}
else{
    
    buyButton.classList.add("hidden");
}

if (ticketSource === "uploaded") {
  // TODO: Implement delete ticket functionality
  deleteButton.addEventListener("click", function (event) {
        let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
        let ticketIndex = tickets.findIndex(ticket=>
            ticket.ticketNumber===selectedTicket.ticketNumber
        )
        if(ticketIndex!==-1){
            tickets.splice(ticketIndex,1);
            localStorage.setItem("tickets", JSON.stringify(tickets));
        }
        window.location.href="myTickets.html";
        
        
  });
} else {
  deleteButton.classList.add("hidden");
}
