module.exports = {
    async deletePage(req, res) {
        const id = req.params.id;
        console.log(id);
        await req.storage.deleteCar(id);

        res.redirect('/')
    }
}