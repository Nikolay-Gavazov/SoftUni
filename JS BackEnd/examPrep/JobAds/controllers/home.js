module.exports = {
    async home(req, res){
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const jobs = await req.storage.getAll(req.query)
        res.render('home', {_title: 'Home Page', user, jobs});
    }
}