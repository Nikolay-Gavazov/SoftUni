module.exports = {
    async get(req, res){
        const id = req.params.id;
        const cat = await req.storage.getItem(id,'cats');
        res.render('catShelter', {cat})
    },
    async post(req, res){
        const id = req.params.id;
        await req.storage.deleteData(id, 'cats')
        res.redirect('/');
    }
}