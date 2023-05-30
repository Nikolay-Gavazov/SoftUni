module.exports = {
    async get(req, res) {
        res.render('create', { title: 'Create a cube' });
    },
    async post(req, res) {
        const data = req.body;
        const cube = {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            difficultyLevel: Number(data.difficultyLevel)
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