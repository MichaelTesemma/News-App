const express = require('express')
const axios = require('axios')

const app = express();

let r = null

axios.get('http://localhost:8000/api/leads/?format=json')
.then(response => {
    r = response
})

app.get("/", (req, res)=>{
    res.send(JSON.parse(r))
});


app.listen(3000, console.log("The app is up"))