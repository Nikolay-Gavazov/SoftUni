module.exports = {
    async home(req, res){
        try {
            const data = await req.storage.getAll(req.query)
        res.render('home', {_title: 'Home Page', user:req.user, data});
        } catch (error) {
            console.log(error);
            res.render('home', {_title: 'Home Page', user:req.user, data, error});
        }
    
    }
}