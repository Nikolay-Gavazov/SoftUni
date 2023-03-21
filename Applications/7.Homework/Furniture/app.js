import { render } from "../../../node_modules/lit-html/lit-html.js"
import { registerPage } from "./pages/register.js";
import page from "../../../node_modules/page/page.mjs"
import { createPage } from "./pages/create.js";
import { myFurniturePage } from "./pages/myFurniture.js";
import { homePage } from "./pages/home.js";
import { editPage } from "./pages/edit.js";
import { detailsPage } from "./pages/details.js";
import { loginPage } from "./pages/login.js";
import { logout } from "./src/data.js";

const div = document.querySelector('.container');
document.getElementById('logoutBtn').addEventListener('click', logoutFunc);


page('/Applications/7.Homework/Furniture/index.html', decorate, homePage)
page('/', decorate, homePage)
page('/create', decorate, createPage)
page('/my-furniture', decorate, myFurniturePage)
page('/edit/:id', decorate, editPage)
page('/details/:id', decorate, detailsPage)
page('/login', decorate, loginPage)
page('/register', decorate, registerPage)
updateNav();
page.start();

function decorate(ctx, nextFunc){
    ctx.updateNav = updateNav;
    ctx.render = (content) => render(content, div);

    nextFunc();
}


function updateNav(){
    const user = localStorage.getItem('userData');
    const userView = document.getElementById('user')
    const guestView = document.getElementById('guest')
    if(user != null){
        userView.style.display = 'inline-block';
        guestView.style.display = 'none';
    }else{
        userView.style.display = 'none';
        guestView.style.display = 'inline-block';
    }
}

async function logoutFunc(){
    logout();
    updateNav();
    page.redirect('/')
}