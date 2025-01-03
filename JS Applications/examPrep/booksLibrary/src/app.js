import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from '../pages/layout.js';
import { getUserData } from './util.js';
import { homePage } from '../pages/home.js';
import { loginPage } from '../pages/login.js';
import { registerPage } from '../pages/register.js';
import { logout } from './data/user.js';
import { addBookPage } from '../pages/addBook.js';
import { detailsPage } from '../pages/details.js';
import { editPage } from '../pages/edit.js';
import { myBooksPage } from '../pages/myBooks.js';

const root = document.getElementById('container');

page(decorateContext);
page('/Applications/examPrep/booksLibrary/index.html', homePage);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutFunction);
page('/addBook', addBookPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myBooks', myBooksPage);

page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;

    next();
}

function renderView(content){
    const userData = getUserData()
    render(layoutTemplate(userData, content), root)
}


function logoutFunction(ctx){
    logout();
    ctx.page.redirect('/');
}