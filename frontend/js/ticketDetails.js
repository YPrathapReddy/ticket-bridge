let selectedTicket = JSON.parse(localStorage.getItem("selectedTicket"));

let ticketHeading = document.getElementById("ticketHeading");
let operator = document.getElementById("operator");
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
fromPlace.textContent = selectedTicket.fromPlace;
toPlace.textContent = selectedTicket.toPlace;
travelDate.textContent = selectedTicket.travelDate;
seatNumber.textContent = selectedTicket.seatNumber;
originalPrice.textContent = "₹" + selectedTicket.originalPrice;
resalePrice.textContent = "₹" + selectedTicket.resalePrice;
description.textContent = selectedTicket.description || "No desrciption provided.";
youSave.textContent = "₹"+(selectedTicket.originalPrice - selectedTicket.resalePrice);