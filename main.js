document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch a new quote and display it
  function fetchAndDisplayQuote() {
    fetch("quotes.json") // fetch local JSON file
      .then((response) => response.json())
      .then((data) => {
        // get a random quote from the array
        const randomQuote =
          data.quotes[Math.floor(Math.random() * data.quotes.length)];
        document.getElementById("text").innerText =
          '"' + randomQuote.quote + '"';
        document.getElementById("author").innerText = randomQuote.author;

        // update the href attribute of the #tweet-quote element
        let tweetUrl =
          "https://twitter.com/intent/tweet?text=" +
          encodeURIComponent(
            '"' + randomQuote.quote + '" ' + randomQuote.author
          );
        document.getElementById("tweet-quote").href = tweetUrl;
      });
  }

  // Fetch and display a quote when the page loads
  fetchAndDisplayQuote();

  // Fetch and display a new quote when the "New Quote" button is clicked
  document
    .getElementById("new-quote")
    .addEventListener("click", fetchAndDisplayQuote);
});
