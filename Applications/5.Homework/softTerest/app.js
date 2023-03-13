
import { initalizer } from "./src/router.js";
import { logout } from "./src/user.js";
import { showCatalog } from "./src/views/catalog.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";
import { showHomeView } from "./src/views/home.js";
import { showLogin } from "./src/views/login.js";
import { showRegister } from "./src/views/register.js";

document.getElementById('defSection').remove();

async function logoutFunction(){
    await logout();
    router.updateNav()
}

const links = {
    '/': showHomeView,
    '/catalog': showCatalog,
    '/create': showCreate,
    '/details': showDetails,
    '/login': showLogin,
    '/register': showRegister,
    '/logout': logoutFunction
}

const router = initalizer(links);
router.goTo('/')
router.updateNav();