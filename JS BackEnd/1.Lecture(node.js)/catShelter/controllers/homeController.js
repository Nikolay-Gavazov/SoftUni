const homePage = require('../views/home/index');
const style = require('../content/styles/site');
const cats = require('../data/cats');
const { searchItem } = require('../util');


function homeController(req, res) {
    res.write(homePage(cats));
    res.end();
}

function searchCat(req, res) {
    const result = searchItem(req);
    res.write(homePage(result));
    res.end();
}

function styleController(req, res) {
    res.write(style);
    res.end();
}



module.exports = {
    homeController,
    styleController,
    searchCat
}