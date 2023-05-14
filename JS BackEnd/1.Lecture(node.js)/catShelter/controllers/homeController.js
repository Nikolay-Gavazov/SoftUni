const homePage = require('../views/home/index');
const style = require('../content/styles/site');
const data = require('../data/cats')

function homeController(req, res){
    res.write(homePage(data));
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