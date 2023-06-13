const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');
const { Router } = require('express');
const secret = 'lapamChushki';
const { body, validationResult } = require('express-validator');


const router = Router();

router.get('/register', (req, res) => {
    res.render('register', {_title: 'Register Page'});
});

router.post('/register',
    body('firstName').trim(),
    body('lastName').trim(),
    body('email').trim(),
    body('password').trim(),
    body('rePass').trim(),
    body('firstName', 'Firstname must be at least 2 characters long')
        .isLength({ min: 2 })
        .isAlphanumeric(),
    body('lastName', 'Lastname must be at least 2 characters long')
        .isLength({ min: 2 })
        .isAlphanumeric(),
    body('email', 'Email must be at lest 10 characters long')
        .isLength({ min: 10 })
        .isEmail(),
    body('password', 'Password must be at least 4 characters long')
        .isLength({ min: 4 }),
    body('rePass', 'Password missmatch.').custom((value, { req }) => value == req.body.password),
    async (req, res) => {
        const { firstName, lastName, email, password, rePass } = req.body;
        const { errors } = validationResult(req);
        try {
            if (errors.length > 0) {
                throw errors;
            }
            const salt = await bcrypt.genSalt(3);
            const hash = await bcrypt.hash(password, salt);
            const payload = { email };
            const user = {
                firstName,
                lastName,
                email,
                password: hash,
            }
            const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
            await req.storage.createData(user);
            res.cookie('token', token);
            req.user = {
                firstName,
                lastName,
                email
            };
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.render('register', { _title: 'Register Page', error, firstName,lastName, email })
        }
    });

router.get('/login', (req, res) => {
    res.render('login', { _title: 'Login Page' });
});

router.post('/login',
    body('email', 'Email ist required')
        .trim()
        .isLength({ min: 2 }),
    body('password', 'Password ist required')
        .trim()
        .isLength({ min: 4 }),
    async (req, res) => {
        const { email , password } = req.body;
        const { errors } = validationResult(req);
        try {
            if(errors.length > 0) {
                throw errors
            }
            const user = await req.storage.getUser(email);
            const hash = user.password;
            const isValid = await bcrypt.compare(password, hash);

            if (isValid) {
                const payload = { email };
                const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
                res.cookie('token', token);
                req.user = user;
                res.redirect('/');
            } else {
                throw new Error('Expired Session. Please Login.')
            }
        } catch (error) {
            console.log(error);
            res.render('login', {_title: 'Login Page', error});
        }
    });

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    req.user = null;
    res.redirect('/');
});

module.exports = router;