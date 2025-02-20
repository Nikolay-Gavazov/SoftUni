import page from '../../../../node_modules/page/page.mjs';
import {render} from '../../../../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from '../pages/layout.js';
import { getUserData } from './util.js';
import { homePage } from '../pages/home.js';
import { loginPage } from '../pages/login.js';
import { registerPage } from '../pages/register.js';
import { logout } from './data/user.js';
import { myTeamsPage } from '../pages/myTeams.js';
import { createPage } from '../pages/create.js';
import { detailsPage } from '../pages/details.js';
import { browsePage } from '../pages/browseTeams.js';
import { editPage } from '../pages/edit.js';

//TODO change root selector
const root = document.querySelector('#content');

page(decorateContext);
page('/Applications/8.Homework/Team-Manager/index.html', homePage);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutFunction);
page('/myTeamsPage', myTeamsPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/browsePage', browsePage);

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