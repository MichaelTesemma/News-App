const mongoose = require('mongoose')

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:2717/test');

const articleSchema = mongoose.Schema({
        id: Number,
        title: String,
        body: String,
        tag: String  
})

const Article = mongoose.model('Article', articleSchema)
Article()