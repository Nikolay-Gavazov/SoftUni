module.exports = {
    async home(req, res){
        const cats = await req.storage.getAll('cats');
        res.render('home', {cats})
    }
}