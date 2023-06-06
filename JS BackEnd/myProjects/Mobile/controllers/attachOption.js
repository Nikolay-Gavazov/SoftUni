module.exports = {
    async get(req, res){
        const user = await req.user.checkUser(req);
        const id = req.params.id;
        const car = await req.storage.getById(id);
        const options = await req.option.getRest(car.options);
        const haveOptions = options.length > 0;
        
        res.render('attachOption', {car, user, options, haveOptions, title:'Attach Option'})
    },

    async post (req, res){
        const data = req.body;
        const carId = req.params.id;

        try {
            await req.storage.attachOption(carId, data.option);
            res.redirect(`/details/${carId}`);
        } catch (error) {
            console.log(error.message);
            res.redirect(`/details/${carId}/attach-option`);
        }
    }
}