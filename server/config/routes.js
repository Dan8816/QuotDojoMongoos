
const quotes = require("./../controllers/quotes");

module.exports = (app) => {
    app.get("/", quotes.index),
    app.post("/quote", quotes.create),
    app.get("/quotes", quotes.show)
}