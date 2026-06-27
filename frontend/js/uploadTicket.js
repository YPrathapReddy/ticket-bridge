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
        
    }
});

let ticketImage = document.getElementById("ticketImage");
let previewImage = document.getElementById("previewImage");

ticketImage.addEventListener("change", function(event){
    
    
    let file = event.target.files[0];
    console.log(file);
    previewImage.src = URL.createObjectURL(file);
    previewImage.style.display = "block";
});