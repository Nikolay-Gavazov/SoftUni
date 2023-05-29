module.exports = {
    get(req, res) {
        res.render('create', { title: 'Publish your car' });
    },
    async post(req, res) {
        const data = req.body;
        const car = {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            price: Number(data.price)

        };
        try {
            await req.storage.createCar(car);
            res.redirect('/');
        } catch (error) {
            console.log('Error creating record');
            res.redirect('/create');
        }
    }
}