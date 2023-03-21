import { render } from "../../../node_modules/lit-html/lit-html.js"
import { registerPage } from "../pages/register.js";
import page from "../../../node_modules/page/page.mjs"
import { createPage } from "../pages/create.js";
import { myFurniturePage } from "../pages/myFurniture.js";
import { homePage } from "../pages/home.js";
import { editPage } from "../pages/edit.js";
import { detailsPage } from "../pages/details.js";
import { loginPage } from "../pages/login.js";


const div = document.querySelector('.container');

page('/', decorate, homePage)
page('index.html', decorate, homePage)
page('/create', decorate, createPage)
page('/my-furniture', decorate, myFurniturePage)
page('/edit/:id', decorate, editPage)
page('/details/:id', decorate, detailsPage)
page('/login', decorate, loginPage)
page('/register', decorate, registerPage)
page.start();

function decorate(ctx, nextFunc){
    ctx.render = (content) => render(content, div);

    nextFunc();
}
