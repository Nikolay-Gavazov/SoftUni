module.exports = {
    async get(req, res) {
        const id = req.params.id;
        const cube = await req.cube.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('edit', { cube, title: `Edit - ${cube.name}`, user});
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