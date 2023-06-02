module.exports = {
    async notFound(req, res){
        const user = await req.user.checkUser(req);
        res.render('404', {title: 'Not Found', user});
    }
}