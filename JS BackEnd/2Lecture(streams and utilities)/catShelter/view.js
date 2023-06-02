const fs = require('fs');

const layout = fs.readFileSync('./views/layout.html').toString();

function loadFragment(name, callBack) {
    fs.readFile(`./views/${name}.html`, (err, data) => callBack(data.toString()));
}

function render(body) {
    return layout.replaceAll('{{{body}}}', body);
}

module.exports = {
    render,
    loadFragment
}