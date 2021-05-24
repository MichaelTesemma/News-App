const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')

axios.get("http://localhost:3000")
.then(res => {
    if (!error && res.status == 200) {
        console.log(html)
    }else(error)
        console.log(error)
    
})