const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/create', async (req, res) => {
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        if(!user){
            return res.render('notFound');
        }
        res.render('create', { user });
    })
    router.post('/create',
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
        const data = req.body;
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const { errors } = validationResult(req);
        const photo = {
            name: data.name,
            age: Number(data.age),
            image: data.image,
            location: data.location,
            description: data.description,
            ownerId: user._id
        };

        try {
            if(errors.length > 0){
                throw errors
            }
            await req.photo.createItem(photo);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', { error, user, photo});
        }
    });

module.exports = router;
