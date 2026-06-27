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