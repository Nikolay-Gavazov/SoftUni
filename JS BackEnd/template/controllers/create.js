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
        body('title').trim(),
        body('author').trim(),
        body('genre').trim(),
        body('image').trim(),
        body('review').trim(),
        body('title', 'Title should be at least 2 characters')
        .isLength({min: 2}),
        body('author', 'Author should be at least 5 characters')
        .isLength({min: 5}),
        body('image', 'Genre should start with "http://" or "https://"')
        .isURL(),
        body('genre', 'Genre should be at least 3 characters')
        .isLength({min: 3}),
        body('stars', 'Stars should be positive number (from 1 to 5 inclusive)')
        .isInt({min: 1, max: 5}),
        body('review', 'Review should be at least 10 characters.')
        .isLength({min: 10}),
        async(req, res) => {
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const book = {
            title: data.title,
            author: data.author,
            genre: data.genre,
            stars: Number(data.stars),
            image: data.image,
            review: data.review,
            owner: {user: user._id, email: user.email},
        };

        try {
            if(errors.length > 0){
                throw errors;
            }
            const result = await req.storage.createItem(book);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', { error, user, book});
        }
    });

module.exports = router;
