const http = require('http');
const router = require('./router');
const { homeController, styleController, searchCat } = require('./controllers/homeController');
const { addBreedController, createBreed } = require('./controllers/addBreedController');
const { editController, editCat } = require('./controllers/editController');
const { addCatController, createCat } = require('./controllers/addCatController');
const { deleteCat, catShelterController, } = require('./controllers/deleteCat');

const server = http.createServer(router.main);

router.get('/', homeController);
router.get('/styles/site.css', styleController);
router.get('/add-breed', addBreedController);
router.get('/add-cat', addCatController);
router.post('/edited', editCat);
router.get('/edit', editController);
router.post('/create-breed', createBreed);
router.post('/create-cat', createCat)
router.get('/delete', deleteCat)
router.get('/shelter', catShelterController)
router.get('/search', searchCat)

server.listen(3000, () => console.log('Server is running on port 3000'));