import page from '../../../../node_modules/page/page.mjs';
import {render} from '../../../../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from '../pages/layout.js';
import { getUserData } from './util.js';
import { loginPage } from '../pages/login.js';
import { registerPage } from '../pages/register.js';
import { logout } from './data/user.js';
import { catalogPage } from '../pages/catalog.js';
import { createPage } from '../pages/create.js';
import { detailsPage } from '../pages/details.js';
import { editPage } from '../pages/edit.js';
import { myPostsPage } from '../pages/myPosts.js';

const root = document.getElementById('box');

page(decorateContext);
page('/Applications/examPrep/localOrphanages/index.html', catalogPage);
page('/', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutFunction);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myPosts', myPostsPage);

page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;

    next();
}

function renderView(content){
    const userData = getUserData()
    render(layoutTemplate(userData, content), root)
}

//TODO redirect
function logoutFunction(ctx){
    logout();
    ctx.page.redirect('/catalog');
}