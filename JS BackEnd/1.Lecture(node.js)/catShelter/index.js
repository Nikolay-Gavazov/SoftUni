const http = require('http');
const router = require('./router');
const { homeController, styleController } = require('./controllers/homeController');
const { addBreedController, addCatController } = require('./controllers/addController');
const { editController } = require('./controllers/editController');


const server = http.createServer(router.main);

router.register('/', homeController);
router.register('/styles/site.css', styleController);
router.register('/add-breed', addBreedController);
router.register('/add-cat', addCatController);
router.register('/edit/:id', editController);


server.listen(3000, () => console.log('Server is running on port 3000'));