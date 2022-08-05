
// global variable to be used across the whole application
let apiQuotes = [];
const loader = document.getElementById("loader")
const quoteContainer = document.getElementById("quote-container")
// an async function is required when making an api request

// Show Loading
function loading () {
loader.hidden = false;
quoteContainer.hidden = true;
}
// Hide Loading
function complete () {
    loader.hidden = true;
    quoteContainer.hidden = false;
    }
function newQuote () {
    loading()
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    let quoteText = quote.text;
    var authorText = quote.author;
    document.getElementById("quote").innerHTML = quoteText;
    document.getElementById("author").innerHTML = authorText;
    complete()
}

async function getQuotes () {
    loading()
    const apiURL = "https://type.fit/api/quotes"
    try {
        const response = await fetch(apiURL)
        apiQuotes = await response.json()      
        let loadInQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]        
        let loadInQuoteText = loadInQuote.text;
        let loadInAuthorText = loadInQuote.author;
        document.getElementById("quote").innerHTML = loadInQuoteText;
        document.getElementById("author").innerHTML = loadInAuthorText;
    } catch (error) {
        // where you would handle your error, pass it into an alert etc...
    }
    complete()
}
getQuotes()