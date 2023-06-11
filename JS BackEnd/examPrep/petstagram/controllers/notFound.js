module.exports = {
    async notFound(req, res){
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('404', {title: 'Not Found', user});
    }
}