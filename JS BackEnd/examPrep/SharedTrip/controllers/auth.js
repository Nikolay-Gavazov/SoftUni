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
    body('email', 'Email should be in the following format (mailboxname @ domainname) - "username@domain.bg"')
    .isEmail(),
    body('password', 'Password must be at least 4 characters long')
    .isLength({ min: 4 }),
    body('rePass', 'Password missmatch.').custom((value, { req }) => value == req.body.password),
    body('gender', 'Gender must be checked').isLength({min: 1}),
    async (req, res) => {
        const { email, password, rePass, gender } = req.body;
        const { errors } = validationResult(req);
        const isMale = gender == 'male';
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
                gender
            }
            const result = await req.storage.createData(user);
            console.log(result);
            if(result){
                const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
                res.cookie('token', token);
                req.user = {
                    email,
                    gender
                };
                res.redirect('/');
            }else{
                const error = [];
                error.push({msg: 'This user is already taken!'});
                throw error;
            }
        } catch (error) {
            console.log(error);
            res.render('register', { _title: 'Register Page', error, email, isMale })
        }
    });

router.get('/login', (req, res) => {
    res.render('login', { _title: 'Login Page' });
});

router.post('/login',
    body('email', 'Email ist required')
        .trim()
        .isLength({ min: 2 })
        .isEmail(),
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