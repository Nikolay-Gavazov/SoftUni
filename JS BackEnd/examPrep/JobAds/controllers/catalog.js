module.exports = {
    async catalog(req, res){
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const items = await req.storage.getAll({isOpen: true});
        res.render('catalog', { _title: 'All ads', user, items});
    }
}