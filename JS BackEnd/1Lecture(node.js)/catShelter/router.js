const routes = {};

function main(req, res) {

    const url = new URL(req.url, `http://${req.headers.host}`);
    req.url = url;
    let handler;
    const actions = routes[url.pathname];

    if (actions) {
        handler = actions[req.method];
    }

    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        defaultController(req, res)
    }
}

function register(method, pathname, handler) {
    if (routes[pathname] == undefined) {
        routes[pathname] = {}
    }
    routes[pathname][method] = handler;
}

function get(pathname, handler) {
    register('GET', pathname, handler)
}

function post(pathname, handler) {
    register('POST', pathname, handler)
}


function defaultController(req, res) {
    res.statusCode = 404;
    res.write('<h2>Not found</h2>');
    res.end();
}

module.exports = {
    main,
    register,
    get,
    post,
}