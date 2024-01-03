 // Check if there is a previous visit count in localStorage
    let visitCount = localStorage.getItem("page_view");

    // If no previous count exists, initialize it to 0
    if (visitCount === null) {
        visitCount = 0;
    }

    // Increment the visit count
    visitCount = Number(visitCount) + 1;

    // Update the localStorage with the new visit count
    localStorage.setItem("page_view", visitCount);

    // Display the visit count on the page
    let counterContainer = document.querySelector(".website-counter");
    counterContainer.innerHTML = "Visit Count: " + visitCount;

