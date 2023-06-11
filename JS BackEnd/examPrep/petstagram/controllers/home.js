module.exports = {
    async home(req, res){
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('home', {title: 'Home Page', user});
    }
}