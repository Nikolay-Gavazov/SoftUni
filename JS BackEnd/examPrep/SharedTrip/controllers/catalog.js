module.exports = {
    async catalog(req, res){
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const trips = await req.trip.getAll(req.query);
        res.render('catalog', { _title: 'Shared Trips', user, trips});
    }
}