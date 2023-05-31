module.exports = {
    async home(req, res){
        const cats = await req.storage.searchItem(req.query);
        res.render('home', {cats})
    }
}