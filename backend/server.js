const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

app = express()
app.use(cors())

mongoose.connect("mongodb://localhost:27017/articles")

const articleSchema = mongoose.Schema({
    title: String,
    body: String
})
const articles = mongoose.model('articles', articleSchema)

const getArticles = (callback, limit) => {
    articles.find(callback).limit()
}

const getArticle = (id, callback) => {
    articles.findById(id, callback)
}

app.get("/", (req, res) => {
    res.send("api hit!")
})
app.get("/articles", (req, res) => {
    getArticles(function(err, articles){
    if(err){
        throw err
    }else{
        res.json(articles)
    }
})})

app.get("/articles/:id", (req, res) => {
    getArticle(req.params.id, function(err, article){
        if(err){
            throw err
        }
        res.json(article)
    })
})

app.listen(3001, console.log("Server running on port 3001"))