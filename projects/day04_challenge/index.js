let counterContainer = document.querySelector(".website-counter");

// Fetch the serverless function endpoint to increment the count
fetch("/.netlify/functions/incrementCounter")
  .then(response => response.json())
  .then(data => {
    // Display the visit count on the page
    counterContainer.innerHTML = data.visitCount;
  })
  .catch(error => console.error("Error:", error));

// functions/incrementCounter.js

exports.handler = async function (event, context) {
  let visitCount = Number(localStorage.getItem("page_view")) || 0;

  // Increment the visit count
  visitCount++;

  return {
    statusCode: 200,
    body: JSON.stringify({ visitCount }),
  };
};
