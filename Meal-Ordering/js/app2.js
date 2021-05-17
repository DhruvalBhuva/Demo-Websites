// This is with out express
// Node.js, however, is not browser Javascript. It is a server, much like PHP or Perl, and as such, you can't access the browser's DOM or do anything specific to browser-based Javascript.

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('../index.html')


const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
