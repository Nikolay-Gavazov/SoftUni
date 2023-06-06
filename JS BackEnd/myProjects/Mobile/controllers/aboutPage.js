module.exports = {
    async about(req, res) {
        const user = await req.user.checkUser(req);
        res.render('about' ,{title: 'About us', user})
    }
}