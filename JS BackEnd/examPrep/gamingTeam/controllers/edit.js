const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        const id = req.params.id;
        console.log(id);
        const game = await req.game.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('edit', { game, title: `Edit - ${game.name}`, user});
    }),
    router.post('/edit/:id', async(req, res) => {
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
    });
module.exports = router;