module.exports = {
    async get(req, res) {
        const id = req.params.id;
        const cube = await req.cube.getById(id);
        const accessories = await req.accessory.getRest(cube.accessories);
        const haveAccessories = accessories.length > 0;

        res.render('attachAccessory', { cube, accessories, haveAccessories, title: 'Attach a Accessory', user: req.userData});
    },
    async post(req, res) {
        const data = req.body;
        const accessoryId = data.accessory;
        const cubeId = req.params.id;

        try {
            await req.cube.attachAccessory(cubeId, accessoryId);
            res.redirect(`/details/${cubeId}`);
        } catch (error) {
            console.log(error.message);
            res.redirect(`/details/${cubeId}/attach-accessory`);
        }
    }
}