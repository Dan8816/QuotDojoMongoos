const mongoose = require("mongoose");
const Quote = mongoose.model("Quote");
const Comment = mongoose.model("Comment");

module.exports = {
    index: (req, res) => {
        res.render("index");
    },
    show: (req, res) => {
        Quote.find({}).populate("_comments").exec(function(errors, quotesFromDB){
            if (errors){
                console.log(errors);
            }else{
                res.render("AllQuotes", {quotes: quotesFromDB});
            }
        }
    )}, 
    createQuote: (req, res) => {
        const quote = new Quote();
        quote.name = req.body.name;
        quote.content = req.body.content;
        quote.save((err)=>{
            if(err){
                console.log("Error", err);
                for(var key in err.errors){
                    req.flash('Error', err.errors[key].message);
                }
                console.log("above redirect");
                res.redirect("/quotes");
            }else{
                res.redirect("/quotes");
            } 
        });
    },
    addComment: (req, res) => {
        Quote.findOne({_id: req.body.id}, (errorComment, quote) =>{
            if (errorComment){
                console.log(errorComment);
            }else{
                console.log(quote);
                var comment = new Comment({
                    name: req.body.name,
                    content: req.body.comment,
                    _quote: quote.id 
                });
                console.log(comment)
                comment.save(function(err){
                    if(err){
                        console.log("errors");
                        res.redirect('/quotes');
                    }else{
                        quote._comments.push(comment);
                        quote.save();
                        console.log(quote);
                        res.redirect("/quotes");
                    }
                });
            }
        })
    }
}
