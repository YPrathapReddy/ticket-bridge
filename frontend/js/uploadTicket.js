
let loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
  window.location.href = "login.html";
}


// =======================
// Local Storage
// =======================

let editTicket = JSON.parse(localStorage.getItem("editTicket"));

// =======================
// DOM Elements
// =======================

let pageHeading = document.getElementById("pageHeading");
let uploadForm = document.getElementById("uploadForm");
let submitButton = document.getElementById("submitButton");

let ticketType = document.getElementById("ticketType");
let ticketNumber = document.getElementById("ticketNumber");
let fromPlace = document.getElementById("fromPlace");
let toPlace = document.getElementById("toPlace");
let travelDate = document.getElementById("travelDate");
let operator = document.getElementById("operator");
let seatNumber = document.getElementById("seatNumber");
let originalPrice = document.getElementById("originalPrice");
let resalePrice = document.getElementById("resalePrice");
let description = document.getElementById("description");

let ticketImage = document.getElementById("ticketImage");
let previewImage = document.getElementById("previewImage");

// =======================
// Edit Mode Initialization
// =======================

if (editTicket) {
  pageHeading.textContent = "Edit Ticket";
  submitButton.textContent = "Update Ticket";

  ticketType.value = editTicket.ticketType;
  ticketNumber.value = editTicket.ticketNumber;
  fromPlace.value = editTicket.fromPlace;
  toPlace.value = editTicket.toPlace;
  travelDate.value = editTicket.travelDate;
  operator.value = editTicket.operator;
  seatNumber.value = editTicket.seatNumber;
  originalPrice.value = editTicket.originalPrice;
  resalePrice.value = editTicket.resalePrice;
  description.value = editTicket.description;
}

// =======================
// Upload / Update Form
// =======================

uploadForm.addEventListener("submit", function (event) {
  event.preventDefault();
let originalPriceValue = parseInt(originalPrice.value);
let resalePriceValue = parseInt(resalePrice.value);

if (resalePriceValue > originalPriceValue) {
    alert("Resale price cannot be greater than original price.");
    return;
}

  let currentTicket = {
    ticketType: ticketType.value,
    ticketNumber: ticketNumber.value,
    fromPlace: fromPlace.value,
    toPlace: toPlace.value,
    travelDate: travelDate.value,
    operator: operator.value,
    seatNumber: seatNumber.value,
    originalPrice: originalPriceValue,
    resalePrice: resalePriceValue,
    description: description.value,
  };

  let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

  
  let isDuplicate = tickets.some(
    (ticket) =>{
      if (
        editTicket &&
        ticket.ticketType === editTicket.ticketType &&
        ticket.ticketNumber.trim().toLowerCase() ===
          editTicket.ticketNumber.trim().toLowerCase()
      ) {
        return false;
      }

      return (
        ticket.ticketType === currentTicket.ticketType &&
        ticket.ticketNumber.trim().toLowerCase() ===
          currentTicket.ticketNumber.trim().toLowerCase()
      );
    }
  );

  if (isDuplicate) {
    alert("A ticket with this ticket number already exists.");
    return;
  }
  
  // Upload Logic (We'll replace this with Update logic next)
  if(editTicket){

    let ticketIndex = tickets.findIndex(ticket=> 
        ticket.ticketNumber===editTicket.ticketNumber
    );
    if(ticketIndex!==-1){
        tickets[ticketIndex] = currentTicket;
    }
  }
  else{
    tickets.push(currentTicket);
  }

  localStorage.setItem("tickets", JSON.stringify(tickets));
  

  if (editTicket) {
    localStorage.removeItem("editTicket");
    alert("Ticket updated successfully!");
  } else {
    alert("Ticket uploaded successfully!");
  }
  window.location.href = "myTickets.html";
});

// =======================
// Image Preview
// =======================

ticketImage.addEventListener("change", function (event) {
  let file = event.target.files[0];

  if (!file) return;

  previewImage.src = URL.createObjectURL(file);
  previewImage.style.display = "block";
});
