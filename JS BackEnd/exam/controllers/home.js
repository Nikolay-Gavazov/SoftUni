module.exports = {
    async home(req, res){
        try {
            const animals = await req.storage.getAll(req.query)
            const data = animals.slice(-3).reverse();
        res.render('home', {_title: 'Home Page', user:req.user, data});
        } catch (error) {
            console.log(error);
            res.render('home', {_title: 'Home Page', user:req.user, data, error});
        }
    
    }
}