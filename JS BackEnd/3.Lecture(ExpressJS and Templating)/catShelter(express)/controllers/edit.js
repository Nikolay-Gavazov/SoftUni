module.exports = {
    async get(req, res){
        const id = req.params.id;
        const breeds = await req.storage.getBreeds();
        const cat = await req.storage.getItem(id,'Cat');
        res.render('editCat', {cat, breeds})
    },
    async post(req, res){
        const id = req.params.id;
        const data = req.body;
        await req.storage.editData({
            "name": data.name,
            "description": data.description,
            "img": data.img,
            "breed": data.breed},id, 'Cat')
        res.redirect('/');
    }
}