const express = require('express')
const articles = require('./backend/routes/api/articles')

const app = express()

const found = null
app.get(('/articles/:id'), (req, res) => {
    isThere = articles.some(found => found.id == req.params.id)
    if (isThere){
        res.json(articles.filter(found => found.id == req.params.id))
    }else{
        res.status(400).json({msg: 'bad request/ article not found'})
    }
})

app.listen(3001, console.log('Server running'))