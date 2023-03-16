import { initialize } from "./api/router.js";
import { logout } from "./api/user.js";
import { addMoviePage } from "./pages/addMovie.js";
import { editMoviePage } from "./pages/editMovie.js";
import { homePage } from "./pages/home.js";
import { loginPage } from "./pages/login.js";
import { movieInfoPage } from "./pages/movieInfo.js";
import { registerPage } from "./pages/register.js";

const div = document.getElementById('all')
div.remove();

const links = {
    '/': homePage,
    '/edit': editMoviePage,
    '/add': addMoviePage,
    '/movieInfo': movieInfoPage,
    '/login': loginPage,
    '/register': registerPage,
    '/logout': logoutFunc
}

async function logoutFunc(){
    await logout();
    router.updateNav();
}

const router = initialize(links);
router.goTo('/')
router.updateNav();