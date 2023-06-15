module.exports = {
    async notFound(req, res){
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        res.render('404', {_title: 'Not Found', user});
    }
}