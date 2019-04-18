// Schema largely influenced by the populate exercise, modified for use here
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {type: String},
    link: {type: String}
});

Let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;