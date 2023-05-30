module.exports = {
    async get(req, res){
        res.render('createAccessory', {title: 'Create a Accessory'});
    },
    async post(req, res){
        const data = req.body;
        const accessory = {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
        };

        try {
            await req.storage.createItem(accessory);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.redirect('/create/accessory');
        }
    }
}