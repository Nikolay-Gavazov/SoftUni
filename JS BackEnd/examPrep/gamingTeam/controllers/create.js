const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/create', async (req, res) => {
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('create', { title: 'Create Game', user });
    })
    router.post('/create',
        body('name').trim(),
        body('image').trim(),
        body('price').trim(),
        body('genre').trim(),
        body('description').trim(),
        body('platform')
        .custom(value => value == 'PC' || 
        value == 'Nintendo' || 
        value == 'PS4' ||
        value == 'PS5' ||
        value == 'XBOX'),
        async(req, res) => {
        const data = req.body;
        const game = {
            platform: data.platform,
            name: data.name,
            image: data.image,
            price: Number(data.price),
            genre: data.genre,
            description: data.description,
        };

        try {
            await req.game.createItem(game);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.redirect('/create');
        }
    });

module.exports = router;
