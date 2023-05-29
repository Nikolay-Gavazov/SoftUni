module.exports = {
    async get(req, res){
        const breeds = await req.storage.getBreeds();
        res.render('addCat', {breeds})
    },
    async post(req, res){
        const data = req.body;
        const cat = {
            name: data.name,
            description: data.description,
            img: data.img,
            breed: data.breed};

        try {
            await req.storage.createData(cat, 'Cat')
            res.redirect('/');
        } catch (error) {
            console.log('Error creating record');
            res.redirect('/create-cat');
        }
        
    }
}