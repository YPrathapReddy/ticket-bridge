let uploadedTicketsContainer = document.getElementById("uploadedTicketsContainer");

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

if(tickets.length === 0){
    uploadedTicketsContainer.innerHTML = `
    <h3>🎫 No uploaded tickets yet.</h3>
    <p>Upload your first ticket and recover your money.</p>
    <a href="uploadTicket.html" class="upload-ticket-btn">
        Upload Ticket
    </a>
    `;
}
else{
    for(let i=0; i<tickets.length;i++){

    let ticket = tickets[i];

        uploadedTicketsContainer.innerHTML+=`
            <div class ="ticket-card">

                <h3>${ticket.ticketType.charAt(0).toUpperCase() + ticket.ticketType.slice(1)} Ticket</h3>
                <p><strong>Operator : </strong> ${ticket.operator}</p>
                <p><strong>Route:</strong> ${ticket.fromPlace} → ${ticket.toPlace}</p>
                <p><strong>Date:</strong> ${ticket.travelDate}</p>
                <p><strong>Resale Price:</strong> ₹${ticket.resalePrice}</p>
                <button class="details-btn" data-index="${i}">
                    View Details
                </button>
            </div>
        `;

    }
}

uploadedTicketsContainer.addEventListener("click", function(event){
    if (event.target.classList.contains("details-btn")) {  
        let index = event.target.dataset.index;

        let selectedTicket = tickets[index];

        localStorage.setItem(
            "selectedTicket",
            JSON.stringify(selectedTicket)
        );
        localStorage.setItem("ticketSource", "uploaded");
        window.location.href = "ticketDetails.html";
        
        

        
    }

    
});


let purchasedTicketsContainer = document.getElementById(
  "purchasedTicketsContainer",
);
let purchasedTickets = JSON.parse(localStorage.getItem("purchasedTickets")) || [];

for(let i=0; i<purchasedTickets.length; i++){
    let ticket = purchasedTickets[i];

    purchasedTicketsContainer.innerHTML += `

    <div class ="ticket-card">

            <h3>${ticket.ticketType.charAt(0).toUpperCase() + ticket.ticketType.slice(1)} Ticket</h3>
            <p><strong>Operator : </strong> ${ticket.operator}</p>
            <p><strong>Route:</strong> ${ticket.fromPlace} → ${ticket.toPlace}</p>
            <p><strong>Date:</strong> ${ticket.travelDate}</p>
            <p><strong>Amount Paid:</strong> ₹${ticket.amountPaid}</p>
            <button class="details-btn" data-index="${i}">
                View Details
            </button>
        </div>

    `;
}



purchasedTicketsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("details-btn")) {
    let index = event.target.dataset.index;

    let selectedTicket = purchasedTickets[index];

    localStorage.setItem("selectedTicket", JSON.stringify(selectedTicket));
    localStorage.setItem("ticketSource", "purchased");
    window.location.href = "ticketDetails.html";
  }
});