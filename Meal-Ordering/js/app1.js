// Can't access dom element of js in backend so it will not work

const http = require('http');
const fs= require('fs');
const app=express();

const indexFile=fs.readFileSync('../index.html')

const hostname = '127.0.0.1';
const port = 3000;


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});