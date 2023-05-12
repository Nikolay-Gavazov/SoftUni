const http = require('http');
const router = require('./router');
const { homeController, styleController } = require('./controllers/homeController');
const { addBreedController, addCatController } = require('./controllers/addController');
const { editController } = require('./controllers/editController');


const server = http.createServer(router.main);

router.routes['/'] = homeController;
router.routes['/styles/site.css'] = styleController;
router.routes['/add-breed'] = addBreedController;
router.routes['/add-cat'] = addCatController;
router.routes['/edit/:id'] = editController;

server.listen(3000, () => console.log('Server is running on port 3000'));