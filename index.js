const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Welcome to isekai')
    }
    if (request.url === '/contoh' && request.method === 'GET') {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk;
        });
        request.on('end', () => {
            try {
                const [firstNumber, secondNumber] = body.split(',');
                response.end(`Isi dari request body adalah: ${firstNumber} dan ${secondNumber}`);
            } catch (error) {
                response.statusCode = 400;
                response.end(error);
            }
        });
    }
})

const port = 3000

server.listen(port, () => {
    console.log('server is running di port' + port)
})