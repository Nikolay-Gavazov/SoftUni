module.exports = {
    async catalog(req, res){
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const games = await req.game.getAll(req.query);
        res.render('catalog', {games, title: 'Catalog Page', user});
    }
}