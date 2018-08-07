const mongoose = require("mongoose");
const Quote = mongoose.model("Quote");

module.exports = {
    index: (req, res) => {
        res.render("index");
    },
    show: (req, res) => {
        Quote.find({}, (err, quotesFromDB)=>{
            if(err) {
                console.log(err);
                console.log("2");
            } else {
                console.log(quotesFromDB);
                console.log("2");
                res.render("AllQuotes", {quotes: quotesFromDB});
            }
        })
        console.log("1");
    }, 
    create: (req, res) => {
        const quote = new Quote();
        quote.name = req.body.name;
        quote.content = req.body.content;
        quote.save((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect("/quotes");
        });
    }
}
