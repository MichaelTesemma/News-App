var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')

var app = express()
app.use(cors())
mongoose.connect("mongodb://localhost:27017/articles")

const articleSchema = mongoose.Schema({
    title: String,
    body: String
})

const article = mongoose.model('article', articleSchema)

const getArticle = (callback, limit) =>{
    article.find()
}

app.listen(3001, console.log('Server running on port 3001'))
