const http = require('http');
const router = require('./router');
const { homeController, styleController } = require('./controllers/homeController');
const { addBreedController, createBreed} = require('./controllers/addBreedController');
const { editController } = require('./controllers/editController');
const { addCatController, createCat } = require('./controllers/addCatController');


const server = http.createServer(router.main);

router.get('/', homeController);
router.get('/styles/site.css', styleController);
router.get('/add-breed', addBreedController);
router.get('/add-cat', addCatController);
router.get('/edit/:id', editController);
router.post('/create-breed', createBreed);
router.post('/create-cat', createCat)


server.listen(3000, () => console.log('Server is running on port 3000'));