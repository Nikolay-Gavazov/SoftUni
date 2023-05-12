const homePage = require('../views/home/index');
const style = require('../content/styles/site');

function homeController(req, res){
    res.write(homePage);
    res.end();
}

function styleController(req, res){
    res.write(style);
    res.end();
}

module.exports = {
    homeController,
    styleController
}