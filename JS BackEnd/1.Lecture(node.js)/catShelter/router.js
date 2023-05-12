const routes = {};

function main(req, res){

    const url = new URL(req.url, `http://${req.headers.host}`);

    const handler = match(url);

    if(typeof handler == 'function'){
        handler(req, res);
    }else{
        defaultController(req, res)
    }
}

function match(url){
    const handler = routes[url.pathname];
    return handler;
}

function defaultController(req, res){
    res.statusCode = 404;
        res.write('<h2>Not found</h2>');
        res.end();
}

module.exports = {
    main,
    routes
}