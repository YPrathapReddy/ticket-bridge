console.log("JavaScript Connected")
let uploadForm = document.getElementById("uploadForm");

let originalPrice = document.getElementById("originalPrice").value;
let resalePrice = document.getElementById("resalePrice").value;

if(resalePrice <= originalPrice){
    console.log("continue");
    
}
else{
    console.log("error, resale price is more than original price");
}