const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

    router.get('/create', async (req, res) => {
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        if(!user){
            return res.render('notFound');
        }
        res.render('create', { _title: 'Create Page', user });
    })
    router.post('/create',
        body('title').trim(),
        body('author').trim(),
        body('keyword').trim(),
        body('location').trim(),
        body('date').trim(),
        body('image').trim(),
        body('description').trim(),
        body('title', 'Title should be at least 6 characters')
        .isLength({min: 6}),
        body('keyword', 'Keyword should be at least 6 characters')
        .isLength({min: 6}),
        body('image', 'Photo should start with "http://" or "https://"')
        .isURL(),
        body('date', 'Date should be exactly 10 characters.')
        .isLength({min: 10, max: 10}),
        body('location', 'Location  should be no longer than 15 characters.')
        .isLength({ max: 15}),
        body('description', 'Description should be at least 8 characters.')
        .isLength({min: 8}),
        async(req, res) => {
        const data = req.body;
        const user = await req.storage.getUser(await req.storage.checkUser(req));
        const { errors } = validationResult(req);
        const post = {
            title: data.title,
            keyword: data.keyword,
            date: data.date,
            image: data.image,
            location: data.location,
            description: data.description,
            author: {user: user._id, 
                    fullname : `${user.firstName} ${user.lastName}`},
            rating: 0
        };

        try {
            if(errors.length > 0){
                throw errors
            }
            const result = await req.post.createItem(post);
            await req.storage.addPostToUser(user._id, result._id);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', { error, user, post});
        }
    });

module.exports = router;
