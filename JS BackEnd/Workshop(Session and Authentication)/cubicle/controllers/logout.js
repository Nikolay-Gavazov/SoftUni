module.exports = {
    async logout(req, res) {
        res.clearCookie('token');
        req.userData = null;
        res.redirect('/')
    }
}