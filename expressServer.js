const express = require("express");
const mongoose = require("mongoose")

const app = express();

mongoose.Promise = global.Promise;
//Connecting to Mongo
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
console.log('Connected to DB!!')

//Creating Schema
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    available: Boolean
})

// Creating Model
const Car = mongoose.model('Car', carSchema);

// //Adding to the Model
// const addCar = new Car({
//     brand: 'Ford',
//     model: 'Focus',
//     year: 2008,
//     available: true
// })

// addCar.save((err, doc)=>{
//     if(err) 
//         return console.log(err);
//         console.log(doc)
// })

//Getting from the Model
const car = Car.find((err, doc)=>{
    if(err) return console.log(err);
    return console.log(doc)
})

app.get(("/api"), (req, res)=>{
    res.json(car)
})

app.get(("/"), (req, res) => {
    res.send("It's really working!!")
});

const port = process.env.port || 3001;

app.listen(port, console.log(`Listening on port ${port}`))