const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');
const secret = 'lapamChushki';
const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();

router.get('/register', (req, res) => {
    res.render('register', { _title: 'Register Page' });
});

router.post('/register',
    body('username').trim(),
    body('password').trim(),
    body('rePass').trim(),
    body('address').trim(),
    body('username', 'Username must be at least 4 characters long')
        .isLength({ min: 4 }),
    body('password', 'Password must be at least 3 characters long')
        .isLength({ min: 3 }),
    body('address', 'Address must be a maximum 20 characters long')
        .isLength({ max: 20 }),
    body('rePass', 'Password missmatch.').custom((value, { req }) => value == req.body.password),
    async (req, res) => {
        const { address, password, rePass, username } = req.body;
        const { errors } = validationResult(req);
        try {
            if (errors.length > 0) {
                throw errors;
            }
            const salt = await bcrypt.genSalt(3);
            const hash = await bcrypt.hash(password, salt);
            const payload = { username };
            const user = {
                username,
                address,
                password: hash,
            }
            const result = await req.userStorage.createData(user);
            if (result) {
                const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
                res.cookie('token', token);
                req.user = {
                    username,
                    address
                };
                res.redirect('/');
            } else {
                const error = [];
                error.push({ msg: 'This user is already taken!' });
                throw error;
            }
        } catch (error) {
            console.log(error);
            res.render('register', { _title: 'Register Page', error, address, username })
        }
    });

router.get('/login', (req, res) => {
    res.render('login', { _title: 'Login Page' });
});

router.post('/login',
    body('username', 'Username ist required')
        .trim()
        .isLength({ min: 1 }),
    body('password', 'Password ist required')
        .trim()
        .isLength({ min: 3 }),
    async (req, res) => {
        const { username, password } = req.body;
        const { errors } = validationResult(req);
        try {
            const user = await req.userStorage.getUser(username);
            if (!user) {
                const error = [];
                error.push({ msg: 'Invalid Credentials.' });
                throw error;
            }
            if (errors.length > 0) {
                throw errors
            }
            const hash = user.password;
            const isValid = await bcrypt.compare(password, hash);

            if (isValid) {
                const payload = { username };
                const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
                res.cookie('token', token);
                req.user = { username };
                res.redirect('/');
            } else {
                const error = [];
                error.push({ msg: 'Expired Session. Please Login.' });
                throw error;
            }
        } catch (error) {
            console.log(error);
            res.render('login', { _title: 'Login Page', error, username });
        }
    });

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    req.user = null;
    res.redirect('/');
});

module.exports = router;