const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]}, 
    content: {type: String, required: [true, "Content field is required"]},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
   }, {timestamps: true})
mongoose.model('Quote', QuoteSchema);

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]},
    content: {type: String, required: [true, "Content field is required"]},
    _quote:{type: Schema.Types.ObjectId, ref: "Quote"}
   }, {timestamps: true})
mongoose.model('Comment', CommentSchema);