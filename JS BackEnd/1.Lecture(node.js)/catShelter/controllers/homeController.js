const homePage = require('../views/home/index');
const style = require('../content/styles/site');
const cats = require('../data/cats');


function homeController(req, res) {
    res.write(homePage(cats));
    res.end();
}

function searchCat(req, res) {
    const query = req.url.searchParams.get('query');
    const result = [];
    cats.forEach(cat => {
        for (let el in cat) {
            if (cat[el] == query) {
                result.push(cat);
            }
        }
    });
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