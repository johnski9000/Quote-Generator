
// global variable to be used across the whole application
let apiQuotes = [];
// an async function is required when making an api request
function newQuote () {
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
    let quoteText = quote.text;
    var authorText = quote.author;
    document.getElementById("quote").innerHTML = quoteText;
    document.getElementById("author").innerHTML = authorText;
}

async function getQuotes () {
    const apiURL = "https://type.fit/api/quotes"
    try {
        const response = await fetch(apiURL)
        apiQuotes = await response.json()      
        let loadInQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]        
        let loadInQuoteText = loadInQuote.text;
        var loadInAuthorText = loadInQuote.author;
        document.getElementById("quote").innerHTML = loadInQuoteText;
        document.getElementById("author").innerHTML = loadInAuthorText;
    } catch (error) {
        // where you would handle your error, pass it into an alert etc...
    }
    
}
getQuotes()