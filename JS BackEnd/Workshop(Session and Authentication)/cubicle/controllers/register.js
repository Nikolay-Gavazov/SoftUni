const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');
module.exports = {
    async get(req, res) {
        res.render('registerPage', { title: 'Register' });
    },
    async post(req, res) {
        const {username, password} = req.body;

        try {
            await req.accessory.createItem(accessory);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.redirect('/register');
        }
    }
}