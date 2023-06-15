module.exports = {
    async catalog(req, res){
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const books = await req.storage.getAll(req.query);
        res.render('catalog', { _title: 'Shared Trips', user, books});
    }
}