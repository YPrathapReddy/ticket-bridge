let loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
  window.location.href = "login.html";
}

let selectedTicket = JSON.parse(localStorage.getItem("selectedTicket")) || {};

let checkoutForm = document.getElementById("checkoutForm");

let ticketType = document.getElementById("ticketType");
let operator = document.getElementById("operator");
let route = document.getElementById("route");
let travelDate = document.getElementById("travelDate");
let seatNumber = document.getElementById("seatNumber");

let fullNameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");

let resalePrice = document.getElementById("resalePrice");
let platformFee = document.getElementById("platformFee");
let totalAmount = document.getElementById("totalAmount");

ticketType.textContent =
  selectedTicket.ticketType.charAt(0).toUpperCase() +
  selectedTicket.ticketType.slice(1) +
  " Ticket";
operator.textContent = selectedTicket.operator;
const routeText = `${selectedTicket.fromPlace} → ${selectedTicket.toPlace}`;
route.textContent = routeText;
travelDate.textContent = selectedTicket.travelDate;
seatNumber.textContent = selectedTicket.seatNumber;

resalePrice.textContent = selectedTicket.resalePrice;

const fee = Math.min(100, Math.max(20, selectedTicket.resalePrice * 0.05));

platformFee.textContent = fee;

totalAmount.textContent = fee + selectedTicket.resalePrice;

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const phoneNumber = phoneInput.value.trim();
  const email = emailInput.value.trim();

  let buyerInfo = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    email: email,
  };

  let paymentInfo = {
    platformfee: fee,
    totalAmount: fee + selectedTicket.resalePrice,
  };

  localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));

  localStorage.setItem("buyerInfo", JSON.stringify(buyerInfo));

  window.location.href = "paymentSuccess.html";
});
