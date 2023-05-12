const http = require('http');
const homePage = require('./views/home/index');
const style = require('./content/styles/site');

const routes = {
    '/': homeController,
    '/cats/add-breed': addBreedController,

}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const handler = routes[url.pathname];

    if(typeof handler == 'function'){
        handler(req, res)
    }else if(url.pathname == '/styles/site.css'){
        res.write(style);
        res.end();
    }else{
        defaultController(req, res)
    }

});

function homeController(req, res){
        res.write(homePage);
        res.end();
}

function addBreedController(req, res){
    
}

function addCatController(req, res){
    
}

function defaultController(req, res){
    res.statusCode = 404;
        res.write('<h2>Not found</h2>');
        res.end();
}

server.listen(3000, () => console.log('Server is running on port 3000'));