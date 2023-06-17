const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { autMidd, isAuth } = require('../middlewares/authMidd');

const router = Router();

router.get('/edit/:id', autMidd, isAuth, async (req, res) => {
    const id = req.params.id;
    const publication = await req.storage.getById(id);
    const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
    const isOwner = user?._id.toString() == publication.author._id.toString();
    if (!isOwner) {
        res.status(403).redirect('/');
    }
    res.render('edit', { _title: 'Edit Page', publication, user, id });
}),
    router.post('/edit/:id',
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
        body('certificate', '⦁	The Certificate of authenticity there must be value "Yes" or "No".')
            .custom((value) => value == 'Yes' || value == 'No'),
        autMidd, isAuth, async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const user = await req.userStorage.getUser(await req.userStorage.checkUser(req));
            const { errors } = validationResult(req);
            const publication = {
                title: data.title,
                paintingTech: data.paintingTech,
                certificate: data.certificate,
                image: data.image,
            };
            try {
                if (errors.length > 0) {
                    throw errors;
                }
                await req.storage.editItem(id, publication);
                res.redirect(`/details/${id}`);
            } catch (error) {
                console.log(error);
                res.render('edit', { _title: 'Edit Page', error, user, publication, id });
            }
        });
module.exports = router;