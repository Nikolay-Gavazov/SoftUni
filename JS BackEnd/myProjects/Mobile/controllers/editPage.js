module.exports = {
    async get(req, res) {
        const user = await req.user.checkUser(req);
        const id = req.params.id;
        const car = await req.storage.getById(id);
        if (car) {
            res.render('edit', { title: `Mobile - ${car.name}`, car, user })
        } else {
            res.redirect('/404')
        }
    },

    async post(req, res) {
        const id = req.params.id;
        const data = req.body;
        const car = {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            price: Number(data.price)

        };
        await req.storage.editCar(id, car);
        res.redirect('/')
    }
}