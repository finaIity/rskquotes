// Array of quotes
const quotes = [
    "Love life...regardless of logic, and it's only then one will understand the meaning of it" - Fyodor Dostoyevsky,
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    // Add more quotes as needed
];

// Function to get a random quote from the array
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to display a random quote
function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = getRandomQuote();
}

// Display a random quote when the page loads
displayRandomQuote();
