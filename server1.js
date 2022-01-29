const {print} = require('./utils')
const fs = require('fs');
const http = require('http');
const names=fs.readFileSync('./names.json');
const server = http.createServer((req, res) => {
    const url_ = req.url;
    if (url_ === '/api/names') {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(names)
    } else {
        print("Request was made ", req.url);
        res.writeHead("200", {
            "Content-Type": "text/plain"
        });
        res.end("feed me popconrn")
    }
})

server.listen(3000, '127.0.0.1');
print("Listening to port 3000");