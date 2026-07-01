let filteredTickets = JSON.parse(localStorage.getItem("filteredTickets")) || [];

let searchInfo = JSON.parse(localStorage.getItem("searchInfo"));

let resultsSection = document.getElementById("resultsSection");

let route = document.getElementById("route");
let travelDate = document.getElementById("travelDate");
let resultCount = document.getElementById("resultCount");

route.textContent = searchInfo.fromPlace + " → " + searchInfo.toPlace;
travelDate.textContent = searchInfo.travelDate;

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];


if (filteredTickets.length === 0) {
  resultsSection.innerHTML = `
        <h3>No Tickets Found</h3>
    `;
}
else {

    resultCount.textContent = filteredTickets.length +
        (filteredTickets.length === 1 ? " Ticket Found" : " Tickets Found");


    for (let i = 0; i < filteredTickets.length; i++) {
      let ticket = filteredTickets[i];

      resultsSection.innerHTML += `
        <div class ="ticket-card">

            <h3>${ticket.ticketType.charAt(0).toUpperCase() + ticket.ticketType.slice(1)} Ticket</h3>
            <p><strong>Operator : </strong> ${ticket.operator}</p>
            <p><strong>Route:</strong> ${ticket.fromPlace} → ${ticket.toPlace}</p>
            <p><strong>Date:</strong> ${ticket.travelDate}</p>
            <p><strong>Resale Price:</strong> ₹${ticket.resalePrice}</p>
            <button class="details-btn" data-index="${ticket.originalIndex}">
                View Details
            </button>
        </div>
    `;
    console.log(ticket.originalIndex);
    
    }

}




resultsSection.addEventListener("click", function (event) {
  if (event.target.classList.contains("details-btn")) {
    let originalIndex = event.target.dataset.index;

    let selectedTicket = tickets[originalIndex];

    localStorage.setItem("selectedTicket", JSON.stringify(selectedTicket));

    console.log(selectedTicket);
    
    window.location.href = "ticketDetails.html";
  }
});

