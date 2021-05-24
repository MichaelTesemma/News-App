const express = require('express')
const mongoose = require('mongoose')
const mongoDB = "mongodb://localhost:27017/test"
mongoose.connect(mongoDB)

const itemSchema = mongoose.Schema({
    id: {type: Number},
    title: {type: String},
    body: {type: String}
})
mongoose.model('item', itemSchema)


app = express()
app.get("/", (req, res)=>{
    res.send("Express API")
})
app.listen(3001)