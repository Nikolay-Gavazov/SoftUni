const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');
const secret = 'lapamChushki';

module.exports = {
    async get(req, res) {
        res.render('registerPage', { title: 'Register' });
    },
    async post(req, res) {
        const {username, password, repeatPassword} = req.body;
        if(password != repeatPassword){
            res.redirect('/register');
            return;
        }
        const salt = await bcrypt.genSalt(3);
        const hash = await bcrypt.hash(password, salt);
        const payload = {username};
        const user = {
            username,
            password,
            hash
        }
        try {
            const token = await jwt.sign(payload, secret, { expiresIn: '2d'});
            await req.user.createData(user);
            res.cookie('token', token);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.redirect('/register');
        }
    }
}