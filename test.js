const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'content-Type': 'text/html'});
            res.end(content);
        })
    }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`server running on ${port}......`));