var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var Genres = require('./genre')
var Books = require('./book')
// Init bodyParser with middleware
app.use(bodyParser.json())
// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore')
var db = mongoose.connection

app.get('/', (req, res) => {
    res.send("use /api/books or /api/Books")
})
app.get('/api/genres', (req, res) => {
    Genres.getGenres(function(err, genres){
        if(err){
            throw err
        }
        res.json(genres)
    })
})

app.post('/api/genres', (req, res) => {
    var genre = req.body;
    Genres.addGenre(genre, function(err, genre){
        if(err){
            throw err
        }
        res.json(genre)
    })
})

app.put('/api/genres/:_id', (req, res) => {
    var id = req.params._id;
    var genre = req.body;
    Genres.updateGenre(id, genre, {}, function(err, genre){ //The blank curly braces are for options
        if(err){
            throw err
        }
        res.json(genre)
    })
})

app.delete('/api/genres/:_id', (req, res) => {
    var id = req.params._id;
    Genres.removeGenre(id, function(err, genre){ //The blank curly braces are for options
        if(err){
            throw err
        }
        res.json(genre)
    })
})


app.get('/api/books', (req, res) => {
    Books.getBooks(function(err, books){
        if(err){
            throw err
        }
        res.json(books)
    })
})

app.get('/api/books/:_id', (req, res) => {
    Books.getBookById(req.params._id, function(err, book){
        if(err){
            throw err
        }
        res.json(book)
    })
})

app.post('/api/books', (req, res) => {
    var book = req.body;
    Books.addBook(book, function(err, book){
        if(err){
            throw err
        }
        res.json(book)
    })
})

app.put('/api/books/:_id', (req, res) => {
    var id = req.params._id;
    var book = req.body;
    Books.updateBook(id, book, {}, function(err, book){ //The blank curly braces are for options
        if(err){
            throw err
        }
        res.json(book)
    })
})

app.delete('/api/books/:_id', (req, res) => {
    var id = req.params._id;
    Books.removeBook(id, function(err, book){ //The blank curly braces are for options
        if(err){
            throw err
        }
        res.json(book)
    })
})
app.listen(3001, console.log("server running on port 3001"))