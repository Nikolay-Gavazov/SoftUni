const http = require('http');
const fs = require('fs/promises');


const server = http.createServer(async (req, res) => {
    res.write('<h1>Welcome to Home Page</h1>');
    const homePage = await fs.readFile('./views/home/index.html')
    res.end();
});

server.listen(3000, () => console.log('Server is running on port 3000'));