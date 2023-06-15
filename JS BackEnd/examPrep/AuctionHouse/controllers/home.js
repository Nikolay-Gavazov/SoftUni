module.exports = {
    async home(req, res){
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        res.render('home', {_title: 'Auction House', user});
    }
}