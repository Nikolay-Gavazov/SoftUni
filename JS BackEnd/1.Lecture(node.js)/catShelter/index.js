const http = require('http');
const homePage = require('./views/home/index');
const style = require('./content/styles/site')


const server = http.createServer(async (req, res) => {
    const url = req.url;

    if(url == '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(homePage);
    }else if(url == '/styles/site.css'){
        res.write(style);
    }else if(url == '/cats/add-breed'){

    }

    res.end();
});

server.listen(3000, () => console.log('Server is running on port 3000'));