
const quotes = require("./../controllers/quotes");

module.exports = (app) => {
    app.get("/", quotes.index),
    app.post("/quote", quotes.createQuote),
    app.get("/quotes", quotes.show),
    app.post("/comment", quotes.addComment)
}