module.exports = {
    async catalog(req, res){
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const photos = await req.photo.getAll(req.query);
        res.render('catalog', { user, photos});
    }
}