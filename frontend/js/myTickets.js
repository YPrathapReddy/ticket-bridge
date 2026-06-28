let uploadedTicketsContainer = document.getElementById("uploadedTicketsContainer");

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

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

uploadedTicketsContainer.addEventListener("click", function(event){
    if (event.target.classList.contains("details-btn")) {  
        let index = event.target.dataset.index;

        let selectedTicket = tickets[index];

        localStorage.setItem(
            "selectedTicket",
            JSON.stringify(selectedTicket)
        );
        window.location.href = "ticketDetails.html";
        
        

        
    }
    
});