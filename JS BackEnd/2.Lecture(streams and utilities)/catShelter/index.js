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
router.get('/edit', editController);
router.get('/search', searchCat)
router.get('/shelter', catShelterController)
router.post('/create-breed', createBreed);
router.post('/create-cat', createCat)
router.post('/delete', deleteCat)
router.post('/edited', editCat);

server.listen(3000, () => console.log('Server is running on port 3000'));