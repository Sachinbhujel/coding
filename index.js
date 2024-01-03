let counterContainer = document.querySelector(".website-counter");
let visitCount = localStorage.getItem("page_view");

// Increment the visit count
visitCount = Number(visitCount) + 1;

// Update the localStorage with the new visit count
localStorage.setItem("page_view", visitCount);

// Display the visit count on the page
//localStorage.removeItem("page_view")
counterContainer.innerHTML = visitCount;
