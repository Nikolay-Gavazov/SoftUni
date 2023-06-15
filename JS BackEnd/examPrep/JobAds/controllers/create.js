const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/create', async (req, res) => {
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        if(!user){
            return res.status(401).redirect('/login');
        }
        res.render('create', { _title: 'Create Page', user });
    })
    router.post('/create',
        body('title').trim(),
        body('description').trim(),
        body('category').trim(),
        body('image').trim(),
        body('title', 'Title should be at least 4 characters')
        .isLength({min: 4}),
        body('description', 'Author should be a maximum of 200 characters long')
        .isLength({max: 200}),
        body('image', 'Image should start with "http://" or "https://"')
        .isURL(),
        body('price', 'Price should be positive number')
        .isInt({min: 0}),
        body('category')
        .custom(value => value == 'estate' || 
        value == 'vehicles' || 
        value == 'furniture' ||
        value == 'electronics' ||
        value == 'other'),
        async(req, res) => {
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const item = {
            title: data.title,
            description: data.description,
            category: data.category,
            image: data.image,
            price: Number(data.price),
            author:[ {_id: user._id}],
            isOpen: true
        };

        try {
            if(errors.length > 0){
                throw errors;
            }
            const result = await req.storage.createItem(item);
            await req.userStorage.addAuction(user._id, result._id);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', {_title: 'Create Page', error, user, item});
        }
    });

module.exports = router;
