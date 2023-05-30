module.exports = {
    async get(req, res){
        res.render('attachAccessory', {title: 'Attach a Accessory'});
    },
    async post(req, res){
        // const data = req.body;
        
        // try {
        //     await req.storage.createItem(accessory);
        //     res.redirect('/');
        // } catch (error) {
        //     console.log(error);
        //     res.redirect('/create/accessory');
        // }
    }
}