module.exports = {
    async deletePage(req, res) {
        const id = req.params.id;

        await req.storage.deleteCar(id);

        res.redirect('/')
    }
}