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
        body('name', 'Name should be at least four characters')
        .isLength({min: 4}),
        body('image', 'Game image should start with "http://" or "https://"')
        .isURL(),
        body('price', 'Price should be a positive number')
        .isInt({min: 0}),
        body('genre', 'Genre should be at least two characters long')
        .isLength({min: 2}),
        body('description', 'Description should be at least ten characters long')
        .isLength({min: 10}),
        async(req, res) => {
        const data = req.body;
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const { errors } = validationResult(req);
        const game = {
            platform: data.platform,
            name: data.name,
            image: data.image,
            price: Number(data.price),
            genre: data.genre,
            description: data.description,
        };

        try {
            if(errors.length > 0){
                throw errors
            }
            await req.game.createItem(game);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.render('create', { title: 'Create Game',error, user, game});
        }
    });

module.exports = router;
