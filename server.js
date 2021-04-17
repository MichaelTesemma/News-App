const http = require("http")
const fs = require("fs")
const json = fs.readFileSync("./db.json")

const server = http.createServer((req, res)=> {
    if(req.url==="/articles"){
        res.writeHead(200, {'Content-type' : 'application/json'})
        res.end(json)

    }else if(req.url==="/users"){
        res.writeHead(200,{'Content-type':'application/json'})

        const st = JSON.stringify({
            name:"Michael",
            cars:["Ford", "Nissan"]
        })
        res.end(st)       
    }
    else{
        res.writeHead(404)
        res.end()
    }
})
server.listen(5000, console.log("Server running on Port 5000"))