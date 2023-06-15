const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/create', async (req, res) => {
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        if(!user){
            return res.render('notFound');
        }
        res.render('create', { _title: 'Create Page', user });
    })
    router.post('/create',
        body('name').trim(),
        body('image').trim(),
        body('description').trim(),
        body('name', 'Name should be at least 2 characters')
        .isLength({min: 2}),
        body('price', 'Price should be positive number')
        .isInt({min: 0}),
        body('image', 'Image should start with "http://" or "https://"')
        .isURL(),
        body('description', 'Description should be at least 10 characters.')
        .isLength({min: 10}),
        body('payment')
        .custom(value => value == 'crypto-wallet' || 
        value == 'credit-card' || 
        value == 'debit-card' ||
        value == 'paypal'),
        async(req, res) => {
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const coin = {
            name: data.name,
            image: data.image,
            price: Number(data.price),
            description: data.description,
            payment: data.payment,
            owner: {user: user._id, email: user.email},
        };
        try {
            if(errors.length > 0){
                throw errors;
            }
            const result = await req.storage.createItem(coin);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', {_title: 'Create Page', error, user, coin});
        }
    });

module.exports = router;
