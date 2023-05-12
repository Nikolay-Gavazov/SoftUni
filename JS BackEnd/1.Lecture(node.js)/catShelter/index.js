const http = require('http');
const homePage = require('./views/home/index');
const addBreedPage = require('./views/addBreed')
const style = require('./content/styles/site');


const router = require('./router');


const server = http.createServer(router.main);

router.routes['/'] = homeController;
router.routes['/styles/site.css'] = styleController;
router.routes['/cats/add-breed'] = addBreedController;

function homeController(req, res){
        res.write(homePage);
        res.end();
}

function addBreedController(req, res){
    res.write(addBreedPage);
    res.end();
}

function styleController(req, res){
        res.write(style);
        res.end();
}

function addCatController(req, res){
    
}



server.listen(3000, () => console.log('Server is running on port 3000'));