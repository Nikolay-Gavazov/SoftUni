module.exports = {
    async logout(req, res) {
        res.clearCookie('token');
        res.redirect('/');
    }
}