const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(3000);

server.once('listening', function () {
    console.log('Server pokrenut na adresi: http://localhost:3000');
});


