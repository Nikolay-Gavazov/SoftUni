const http = require('http');
const router = require('./router');
const { homeController, searchCat } = require('./controllers/homeController');
const { addBreedController, createBreed } = require('./controllers/addBreedController');
const { editController, editCat } = require('./controllers/editController');
const { addCatController, createCat } = require('./controllers/addCatController');
const { deleteCat, catShelterController, } = require('./controllers/deleteCat');
const fs = require('fs')
const server = http.createServer((req, res) => {

    if (req.url.startsWith('/views/')) {
        fs.createReadStream(`.${req.url}`).pipe(res);
    } else {
        router.main(req, res);
    }
});


router.get('/', homeController);
router.get('/add-breed', addBreedController);
router.get('/add-cat', addCatController);
router.get('/edit', editController);
router.get('/search', searchCat);
router.get('/shelter', catShelterController);
router.post('/create-breed', createBreed);
router.post('/create-cat', createCat);
router.post('/delete', deleteCat);
router.post('/edited', editCat);

server.listen(3000, () => console.log('Server is running on port 3000'));