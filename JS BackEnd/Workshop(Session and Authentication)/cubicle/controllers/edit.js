module.exports = {
    async get(req, res) {
        const id = req.params.id;
        const cube = await req.cube.getById(id);
        res.render('edit', { cube, title: `Edit - ${cube.name}`, user: req.userData });
    },
    async post(req, res) {
        const id = req.params.id;
        const data = req.body;
        const cube = {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            difficultyLevel: Number(data.difficultyLevel)
        };

        try {
            await req.cube.editItem(id, cube);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.redirect('/edit/:id');
        }
    }
}
