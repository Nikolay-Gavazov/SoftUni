module.exports = {
    get(req, res){
        res.render('addBreed')
    },
    async post(req, res){
        const data = req.body;
        await req.storage.createData({
            "breed": data.breed}, 'breeds')
        res.redirect('/');
    }
}