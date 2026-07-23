let loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
  window.location.href = "login.html";
}



let searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let fromSearch = document
    .getElementById("fromSearch")
    .value.trim()
    .toLowerCase();

  let toSearch = document.getElementById("toSearch").value.trim().toLowerCase();
  let travelDateSearch = document.getElementById("travelDateSearch").value;

  let searchInfo = {
    fromPlace: fromSearch,
    toPlace: toSearch,
    travelDate: travelDateSearch,
  };

  localStorage.setItem("searchInfo", JSON.stringify(searchInfo));

  let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

  let filteredTickets = [];
  for (let i = 0; i < tickets.length; i++) {
    let ticket = tickets[i];
    if (
      ticket.fromPlace.toLowerCase() === fromSearch.toLowerCase() &&
      ticket.toPlace.toLowerCase() === toSearch.toLowerCase() &&
      (travelDateSearch === "" || ticket.travelDate === travelDateSearch)
    ) {
      filteredTickets.push({
        ...ticket,
        originalIndex: i,
      });
    }
  }


  localStorage.setItem("filteredTickets", JSON.stringify(filteredTickets));

  window.location.href = "searchResults.html";

});
