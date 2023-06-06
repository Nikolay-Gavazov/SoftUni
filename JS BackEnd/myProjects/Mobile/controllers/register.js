const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');
const secret = 'samoLevski';

module.exports = {
    async get (req, res) {
        res.render('registerPage', {title: 'Register'});
    },
    async post (req, res) {
        const {username, password, repeatPassword} = req.body;
        if(!username){
           return res.render('registerPage', {title: 'Register', error: 'Username required'});
        }

        if(!password || password != repeatPassword){
           return res.render('registerPage', {title: 'Register', error: 'Password dont match'});
        }
        const salt = await bcrypt.genSalt(3);
        const hash = await bcrypt.hash(password, salt);
        const payload = {username};
        const user = {
            username,
            password: hash
        };
        try {
            const result = await req.user.createUserData(user);
            if(!result){
                return res.render('registerPage', {title: 'Register', error: 'This username already exists'});
            }
            const token = await jwt.sign(payload, secret, {expiresIn: '2d'});
            res.cookie('token', token);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.render('registerPage', {title: 'Register', error: error._message});
        }
    }
}