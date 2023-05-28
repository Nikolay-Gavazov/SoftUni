module.exports = {
    async get(req, res){
        const breeds = await req.storage.getAll('Breed');
        res.render('addCat', {breeds})
    },
    async post(req, res){
        const data = req.body;
        await req.storage.createData({
            "name": data.name,
            "description": data.description,
            "img": data.img,
            "breed": data.breed}, 'Cat')
        res.redirect('/');
    }
}