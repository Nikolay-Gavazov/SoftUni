const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        const options = {
            'PC': 'PC',
            'Nintendo': 'Nintendo',
            'PS4': 'PS4',
            'PS5': 'PS5',
            'XBOX': 'XBOX'
        }
        const id = req.params.id;
        const game = await req.game.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const platforms = Object.keys(options).map(value => ({
            value,
            label: options[value],
            isSelected: game.platform == value

        }));
        res.render('edit', { game, title: `Edit - ${game.name}`, user, platforms});
    }),
    router.post('/edit/:id',
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
        const id = req.params.id;
        const data = req.body;
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const { errors } = validationResult(req);
        const game = {
            platform: data.platform,
            name: data.name,
            image: data.image,
            price: Number(data.price),
            genre: data.genre,
            description: data.description
        };
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.game.editItem(id, game);
            res.redirect(`/details/${id}`);
        } catch (error) {
            console.log(error);
            res.render('edit', { title: 'Edit Game',error, user, game});
        }
    });
module.exports = router;