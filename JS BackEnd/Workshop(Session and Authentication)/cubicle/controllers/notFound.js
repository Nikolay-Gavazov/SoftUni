module.exports = {
    async notFound(req, res){
        res.render('404', {title: 'Not Found', user: req.userData});
    }
}