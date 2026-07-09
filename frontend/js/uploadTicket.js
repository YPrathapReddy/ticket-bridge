console.log("JavaScript Connected")


let uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", function(event){
    event.preventDefault();
    let originalPrice = document.getElementById("originalPrice").value;
    let resalePrice = document.getElementById("resalePrice").value;
    originalPrice = parseInt(originalPrice);
    resalePrice = parseInt(resalePrice);
    if(resalePrice<=originalPrice){
        console.log("continue");
        
    }
    else{
        alert("Resale price cannot be greater than original price.");
        return;
        
    }

    let ticketType = document.getElementById("ticketType").value;
    let ticketNumber = document.getElementById("ticketNumber").value;
    let fromPlace = document.getElementById("fromPlace").value;
    let toPlace = document.getElementById("toPlace").value;
    let travelDate = document.getElementById("travelDate").value;
    let operator = document.getElementById("operator").value;
    let seatNumber = document.getElementById("seatNumber").value;
    let description = document.getElementById("description").value;

    let currentTicket = {
        ticketType : ticketType,
        ticketNumber : ticketNumber,
        fromPlace : fromPlace,
        toPlace : toPlace,
        travelDate : travelDate,
        operator : operator,
        seatNumber : seatNumber,
        originalPrice : originalPrice,
        resalePrice : resalePrice,
        description : description
    };
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(currentTicket);
    localStorage.setItem("tickets", JSON.stringify(tickets));
    console.log(tickets);

    alert("Ticket uploaded successfully!");
    
    
});

let ticketImage = document.getElementById("ticketImage");
let previewImage = document.getElementById("previewImage");

ticketImage.addEventListener("change", function(event){
    
    
    let file = event.target.files[0];
    console.log(file);
    previewImage.src = URL.createObjectURL(file);
    previewImage.style.display = "block";
});