module.exports = {
    async get(req, res){
         const id = req.params.id;
         const car = await req.storage.getById(id);
         if(car){
             res.render('edit', {title: `Mobile - ${car.name}`, car})      
         }else{
             res.redirect('/404')
         }
     },

    async post(req, res){
        const id = req.params.id;

        const data = req.body;
         console.log(data);
            await req.storage.editCar(id,{
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            price: Number(data.price)
        });
        res.redirect('/')
    }
 }