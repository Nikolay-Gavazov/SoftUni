const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');
const secret = 'samoLevski';

module.exports = {
    async get(req, res){
        res.render('loginPage', {title: 'Login'});
    },
    async post(req, res){
        const {username, password} = req.body;
    }
}