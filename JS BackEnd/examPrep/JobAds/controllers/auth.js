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
    body('email').trim(),
    body('password').trim(),
    body('rePass').trim(),
    body('desciption').trim(),
    body('email', 'Email should be in the following format: <name>@<domain>.<extension>')
    .isEmail(),
    body('password', 'Password must be at least 5 characters long')
    .isLength({ min: 5 }),
    body('description', 'Description must be a maximum 40 characters long')
    .isLength({min: 1}),
    body('rePass', 'Password missmatch.').custom((value, { req }) => value == req.body.password),
    async (req, res) => {
        const { email, password, rePass, description } = req.body;
        const { errors } = validationResult(req);
        try {
            if (errors.length > 0) {
                throw errors;
            }
            const salt = await bcrypt.genSalt(3);
            const hash = await bcrypt.hash(password, salt);
            const payload = { email };
            const user = {
                email,
                password: hash,
                description
            }
            const result = await req.userStorage.createData(user);
            if(result){
                const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
                res.cookie('token', token);
                req.user = {
                    email,
                    description
                };
                res.redirect('/');
            }else{
                const error = [];
                error.push({msg: 'This user is already taken!'});
                throw error
            }
        } catch (error) {
            console.log(error);
            res.render('register', { _title: 'Register Page', error, email, description})
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
        .isLength({ min: 5 }),
    async (req, res) => {
        const { email , password } = req.body;
        const { errors } = validationResult(req);
        try {
            const user = await req.userStorage.getUser(email);
            if(!user){
                const error = [];
                error.push({msg: 'Invalid Credentials.'});
                throw error;
            }
            if(errors.length > 0) {
                throw errors
            }
            const hash = user.password;
            const isValid = await bcrypt.compare(password, hash);

            if (isValid) {
                const payload = { email };
                const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
                res.cookie('token', token);
                req.user = user;
                res.redirect('/');
            } else {
                const error = [];
                error.push({msg: 'Expired Session. Please Login.'});
                throw error;
            }
        } catch (error) {
            console.log(error);
            res.render('login', {_title: 'Login Page', error, email});
        }
    });

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    req.user = null;
    res.redirect('/');
});

module.exports = router;