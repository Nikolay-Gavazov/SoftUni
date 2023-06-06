const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');
const secret = 'lapamChushki';

module.exports = {
    async get(req, res) {
        res.render('loginPage', { title: 'Login' });
    },
    async post(req, res) {
        const { username, password } = req.body;

        const user = await req.user.getUser(username);
        const hash = user.password;
        const isValid = await bcrypt.compare(password, hash);

        if (isValid) {
            const payload = { username };
            try {
                const token = await jwt.sign(payload, secret, { expiresIn: '2d' });
                res.cookie('token', token);
                res.redirect('/');
            } catch (error) {
                console.log(error);
                res.redirect('/login');
            }
        } else {
            res.status(401).redirect('/login');
        }
    }
}