module.exports = {
    async details(req, res) {
        const id = req.params.id;
        const car = await req.storage.getById(id);
        const user = await req.user.getUser(await req.user.checkUser(req));
        const isOwner = user.id == car.ownerId;
        const options = req.option.getAll();
        if (car) {
            res.render('details', { title: `Mobile - ${car.name}`, car , isOwner, options, user})
        } else {
            res.redirect('/404')
        }
    }
}