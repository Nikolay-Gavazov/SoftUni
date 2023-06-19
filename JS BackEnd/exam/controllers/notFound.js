module.exports = {
    async notFound(req, res){
        res.render('404', {_title: '404 Page', user:req.user});
    }
}