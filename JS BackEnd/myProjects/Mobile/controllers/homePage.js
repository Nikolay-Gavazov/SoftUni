module.exports = {
    async home(req, res) {
        const cars = await req.storage.getAll(req.query);
        const user = await req.user.checkUser(req);
        res.render('index', { cars, title: 'Mobile', query: req.query, user})
    }
}