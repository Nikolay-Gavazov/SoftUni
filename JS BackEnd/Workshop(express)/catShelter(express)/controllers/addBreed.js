module.exports = {
    get(req, res){
        res.render('addBreed')
    },
    async post(req, res){
        const data = req.body;
        
        try {
            await req.storage.createData({
                breed: data.breed}, 'Breed')
                res.redirect('/');
        } catch (error) {
            console.log('Error creating record');
            res.redirect('/create-breed');
        }
    }
}