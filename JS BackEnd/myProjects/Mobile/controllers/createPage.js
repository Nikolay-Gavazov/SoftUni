module.exports = {
    async get(req, res) {
        const user = await req.user.checkUser(req);
        res.render('create', { title: 'Publish your car' , user});
    },
    async post(req, res) {
        const data = req.body;
        const file = req.files.imageUrl;
        file.mv('./static/cars/' + file.name);
        console.log(data);
        const car = {
            name: data.name,
            description: data.description,
            imageUrl: file.name,
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