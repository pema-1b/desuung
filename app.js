const http = require('http');

const ip = "127.0.0.1";
const port = 3000;//should be above 1024//


const server = http.createServer((req, res) =>{
    res.statusCode =200
    res.setHeader('content-Type', 'text/plain');
    res.end('Hello from server javascripts');
});

server.listen( port, ip, () => console.log('Server running...'));

