const http = require('http');
const homePage = require('./views/home/index')


const server = http.createServer(async (req, res) => {
    res.write(homePage);

    res.end();
});

server.listen(3000, () => console.log('Server is running on port 3000'));