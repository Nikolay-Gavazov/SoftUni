const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/edit/:id', async(req, res) => {
        const options = {
            'crypto-wallet': 'crypto-wallet',
            'credit-card': 'credit-card',
            'debit-card': 'debit-card',
            'paypal': 'paypal'
        }
        const id = req.params.id;
        const coin = await req.storage.getById(id);
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const payment = Object.keys(options).map(value => ({
            value,
            label: options[value],
            isSelected: coin.payment == value

        }));
        res.render('edit', { _title: 'Edit Page', id, coin, payment,user});
    }),
    router.post('/edit/:id',body('name').trim(),
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
    const id = req.params.id;
    const data = req.body;
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const { errors } = validationResult(req);
    const coin = {
        name: data.name,
        image: data.image,
        price: Number(data.price),
        description: data.description,
        payment: data.payment,
    };
        try {
            if(errors.length > 0){
                throw errors;
            }
            await req.storage.editItem(id, coin);
            res.redirect(`/details/${id}`);
        } catch (error) {
            console.log(error);
            res.render('edit', {_title: 'Edit Page', error, user, coin, id});
        }
    });
module.exports = router;