const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]}, 
    content: {type: String, required: [true, "Quote field is required"]}
   }, {timestamps: true})

mongoose.model('Quote', QuoteSchema);