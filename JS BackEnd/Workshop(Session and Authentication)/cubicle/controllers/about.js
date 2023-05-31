module.exports = {
    async about(req, res){
        res.render('about', {title: 'About Page'});
    }
}