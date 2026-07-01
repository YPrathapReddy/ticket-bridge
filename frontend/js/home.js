

let searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form sumited");

  let fromSearch = document.getElementById("fromSearch").value;
  let toSearch = document.getElementById("toSearch").value;
  let travelDateSearch = document.getElementById("travelDateSearch").value;

  console.log(fromSearch);
  console.log(toSearch);
  console.log(travelDateSearch);

  let searchInfo = {
    fromPlace : fromSearch,
    toPlace : toSearch,
    travelDate : travelDateSearch
  };

  localStorage.setItem("searchInfo", JSON.stringify(searchInfo));

  let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

  let filteredTickets =[];
  for(let i=0; i<tickets.length;i++){
    let ticket = tickets[i];
    if( ticket.fromPlace.toLowerCase() === fromSearch.toLowerCase() &&
        ticket.toPlace.toLowerCase() === toSearch.toLowerCase()){
          filteredTickets.push({
            ...ticket,
            originalIndex:i
          });
        }
  }

  console.log(filteredTickets);

  localStorage.setItem("filteredTickets", JSON.stringify(filteredTickets));

  window.location.href="searchResults.html";


});
