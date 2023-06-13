const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        const id = req.params.id;
        const photo = await req.photo.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('edit', { photo, user});
    }),
    router.post('/edit/:id',
    body('name').trim(),
    body('age').trim(),
    body('description').trim(),
    body('location').trim(),
    body('image').trim(),
    body('name', 'Name should be at least four characters')
    .isLength({min: 4}),
    body('image', 'Game image should start with "http://" or "https://"')
    .isURL(),
    body('age', 'Price should be a positive number')
    .isInt({min: 0}),
    body('location', 'Genre should be at least two characters long')
    .isLength({min: 2}),
    body('description', 'Description should be at least ten characters long')
    .isLength({min: 10}),
     async(req, res) => {
        const id = req.params.id;
        const data = req.body;
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const { errors } = validationResult(req);
        const photo = {
            name: data.name,
            age: Number(data.age),
            image: data.image,
            location: data.location,
            description: data.description,
        };
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.game.editItem(id, photo);
            res.redirect(`/details/${id}`);
        } catch (error) {
            console.log(error);
            res.render('edit', { error, user, photo});
        }
    });
module.exports = router;