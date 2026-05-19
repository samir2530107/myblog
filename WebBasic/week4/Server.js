const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/login') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = querystring.parse(body);
            console.log('Received data:', data);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <h1>Received Data</h1>
                <p>Name: ${data.name}</p>
                <p>Password: ${data.pwd}</p>
                <p>Age: ${data.age}</p>
            `);
        });
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})