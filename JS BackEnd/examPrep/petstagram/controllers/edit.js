const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        console.log(req);
        const id = req.params.id;
        const photo = await req.photo.getById(id);
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        res.render('edit', { id, photo, user});
    }),
    router.post('/edit/:id',
    body('name').trim(),
        body('image').trim(),
        body('age').trim(),
        body('location').trim(),
        body('description').trim(),
        body('name', 'Name should be at least 2 characters')
        .isLength({min: 2}),
        body('image', 'Photo should start with "http://" or "https://"')
        .isURL(),
        body('age', 'Age should be at least 1 and no longer than 100 characters.')
        .isLength({min: 1, max: 100}),
        body('location', 'Location  should be at least 5 and no longer than 50 characters.')
        .isLength({min: 5, max: 50}),
        body('description', 'Description should be at least 5 and no longer than 50 characters.')
        .isLength({min: 5, max: 50}),
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
            await req.photo.editItem(id, photo);
            res.redirect(`/details/${id}`);
        } catch (error) {
            console.log(error);
            res.render('edit', { error, user, photo,id});
        }
    });
module.exports = router;