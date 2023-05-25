module.exports = {
    get(req, res){
        res.render('create', {title: 'Publish your car'});      
    },
   async post(req, res){
        const data = req.body;
        await req.storage.createCar({
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            price: Number(data.price)

        });
        res.redirect('/')
    }
}