const http = require('http');
const homePage = require('./views/home/index');
const style = require('./content/styles/site')


const server = http.createServer(async (req, res) => {
    const url = req.url;

    if(url == '/'){
        homeController(req, res)
    }else if(url == '/styles/site.css'){
        res.write(style);
        res.end();
    }else if(url == '/cats/add-breed'){
        addBreedController(req, res)
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