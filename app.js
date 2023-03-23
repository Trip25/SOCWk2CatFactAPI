console.log("Meow if this works!")
/*
 Plan:
 -Write an async function called getQuote✅
 -Get request URL : https://zenquotes.io/api/random/ and store in variable called response✅
- call json() method on response and store in variable called data✅
-use that data to set text content of h1 with id="quote"✅
- error with above zenquotes links so used meowfacts instead
*/
async function getQuote() {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();
    const h1 = document.querySelector("#quote");
    h1.textContent = data.data[0];
    addQuoteHistory(data.data[0]); // call addQuoteHistory function with the new quote
}

// getQuote();

/*Task 2 On click
-add event listener to button id="new-quote-button to call getQuote when user clicks✅
<button id="new-quote-button">New Quote</button>
*/
let button = document.querySelector("#new-quote-button");
button.addEventListener("click", getQuote);

/*Task 3 History
👉 Create a function that takes in a string, creates a new list item with that string, and adds it to the `ol` with the id `"quote-history"`.✅

👉 Call this function within your `getQuote` function so that the quotes get stored in the `"quote-history"` list.✅ */

// let quoteHistory = document.querySelector("#quote-history");

// function addQuoteHistory(string) {
// let olList = document.createElement("li");
// olList.textContent = string;
// quoteHistory.appendChild(previousList);
// addQuoteHistory
// }
let quoteHistory = document.querySelector("#quote-history");

//create an array to track quotes
let addedQuotes = [];

function addQuoteHistory(string) { // accept a string parameter
    if (!addedQuotes.includes(string)) { // check if the quote is already in the array
    let olList = document.createElement("li");
    olList.textContent = string;
    quoteHistory.appendChild(olList);
    addedQuotes.push(string); // add the quote to the array
}
}
/*👉 BONUS TASK !: Change your code so that if a repeat quote is generated, it will not be added again to the list of previous quotes. This means that your list should not contain any duplicates. 
- write something that checks if the quote is a duplicate, if it is, don't add it to the list.
capture list of quotes in an array, using 
check if quote is in array ✅
*/
