module.exports = {
    async catalog(req, res) {
        try {
            const data = await req.storage.getAll(req.query);
            res.render('gallery', { _title: 'Gallery Page', user: req.user, data });
        } catch (error) {
            console.log(error);
            res.render('gallery', { _title: 'Gallery Page', user: req.user, data, error });
        }
    }
}