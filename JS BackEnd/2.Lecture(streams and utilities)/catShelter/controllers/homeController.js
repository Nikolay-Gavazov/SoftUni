const homePage = require('../views/home/index');
const style = require('../content/styles/site');

const { searchItem } = require('../util');
const { loadFragment, render } = require('../view');
const { getData } = require('../data');

async function homeController(req, res) {
    const catsData = await getData('cats');

    loadFragment('home', fragment => {
        const html = fragment.replace(
            '{{{cats}}}',
            catsData.map(cat => `
        <li>
            <img src="${cat.img}" alt="Black Cat">
            <h3>${cat.name}</h3>
            <p><span>Breed: </span>${cat.breed}</p>
            <p><span>Description: </span>${cat.description}</p>
            <ul class="buttons">
                <li class="btn edit"><a href="/edit?id=${cat._id}">Change Info</a></li>
                <li class="btn delete"><a href="/shelter?id=${cat._id}">New Home</a></li>
            </ul>
        </li>`).join('\n'));
        res.write(render(html));
        res.end();   
    });
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