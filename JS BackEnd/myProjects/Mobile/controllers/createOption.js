module.exports = {
   async get(req, res) {
        const user = await req.user.checkUser(req);
        if(!user){
            return res.redirect("404")
        }
        res.render('createOption', { title: 'Create option', user });
    },
    async post(req, res) {
        const data = req.body;
        const file = req.files.imageUrl;
        file.mv('./static/options/' + file.name);
        const option = {
            name: data.name,
            description: data.description,
            imageUrl: file.name,
        };
        
        try {
            await req.option.createOption(option);
            res.redirect('/');
        } catch (error) {
            console.log('Error creating record');
            res.redirect('/create/options');
        }
    }
}