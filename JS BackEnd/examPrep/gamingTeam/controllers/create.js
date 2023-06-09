module.exports = {
    async get(req, res) {
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('create', { title: 'Create Game', user });
    },
    async post(req, res) {
        const data = req.body;
        const game = {
            name: data.name,
            image: data.image,
            price: Number(data.price),
            description: data.description,
            genre: data.genre,
            platform: data.platform,
        };

        try {
            await req.cube.createItem(cube);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.redirect('/create');
        }
    }
}