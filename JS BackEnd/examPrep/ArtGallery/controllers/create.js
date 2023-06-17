const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { autMidd, isAuth } = require('../middlewares/authMidd');

const router = Router();

router.get('/create', autMidd, isAuth, async (req, res) => {
    res.render('create', { _title: 'Create Page', user:req.user });
})
router.post('/create',
    body('title').trim(),
    body('paintingTech').trim(),
    body('certificate').trim(),
    body('image').trim(),
    body('title', 'Title should be at least 6 characters')
        .isLength({ min: 6 }),
    body('paintingTech', 'Painting Technique should be a maximum of 15 characters')
        .isLength({ max: 15 }),
    body('image', 'Publication image should start with "http://" or "https://"')
        .isURL(),
    body('certificate', 'The Certificate of authenticity there must be value "Yes" or "No".')
        .custom((value) => value == 'Yes' || value == 'No'),
    autMidd, isAuth, async (req, res) => {
        const data = req.body;
        const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
        const { errors } = validationResult(req);
        const publication = {
            title: data.title,
            paintingTech: data.paintingTech,
            certificate: data.certificate,
            image: data.image,
            author: { _id: user._id }
        };

        try {
            if (errors.length > 0) {
                throw errors;
            }
            const result = await req.storage.createItem(publication);
            req.userStorage.addAd(user._id, result._id);
            res.redirect('/catalog');
        } catch (error) {
            console.log(error);
            res.render('create', { _title: 'Create Page', error, user, publication });
        }
    });

module.exports = router;
