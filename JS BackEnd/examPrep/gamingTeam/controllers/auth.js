const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');
const { Router } = require('express');
const secret = 'lapamChushki';
const { body, validationResult } = require('express-validator');


const router = Router();

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register Page' });
});

router.post('/register',
body('username').trim(),
body('email').trim(),
body('password').trim(),
body('rePass').trim(),
body('username')
    .isLength({min: 5})
    .isAlphanumeric(),
body('email')
    .isLength({min: 10})
    .isEmail(),
body('password', 'Password must be at least 4 characters long')
    .isLength({min: 4}),
body('rePass', 'Password missmatch.').custom((value, {req}) => value == req.body.password),
async (req, res) => {
    const { username, email, password, rePass } = req.body;
    const {errors} = validationResult(req);   
    try {
        if(errors.length > 0){
            throw errors;
        }
            const salt = await bcrypt.genSalt(3);
            const hash = await bcrypt.hash(password, salt);
            const payload = { email };
            const user = {
                username,
                email,
                password: hash,
            }
            const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
            await req.storage.createData(user);
            res.cookie('token', token);
            req.user = {
                username,
                email
            };
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.render('register', {title: 'Register Page', error})
        }
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page' });
});

router.post('/login',
body('email')
    .trim()
    .isLength({min: 10}),
body('password')
    .trim()
    .isLength({min: 4}),
async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await req.storage.getUser(email);
        const hash = user.password;
        const isValid = await bcrypt.compare(password, hash);

        if(isValid){
            const payload = { email };
            const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
            res.cookie('token', token);
            req.user = email;
            res.redirect('/');
        }else {
            throw new Error('Expired Session. Please Login.')
        }
    } catch (error) {
        console.log(error);
        //const errorMessages = Object.values(error.errors).map(e => e.message);
        res.render('login', {title: 'Login Page', error: error.message});
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token');
        req.user = null;
        res.redirect('/');
});

module.exports = router;