module.exports = {
    async get(req, res) {
        const user = await req.user.checkUser(req);
        res.render('create', { title: 'Create a cube', user });
    },
    async post(req, res) {
        const user = await req.user.checkUser(req);
        const data = req.body;
        const cube = {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            difficultyLevel: Number(data.difficultyLevel),
            ownerId: user._id
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