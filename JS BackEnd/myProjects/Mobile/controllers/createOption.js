module.exports = {
    get(req, res) {
        res.render('createOption', { title: 'Create option' });
    },
    async post(req, res) {
        const data = req.body;
        const file = req.files.imageUrl;
        file.mv('./static/options/' + file.name);
        const option = {
            name: data.name,
            description: data.description,
            imageUrl: file.name,
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