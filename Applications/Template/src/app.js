import page from '../../../node_modules/page/page.mjs';
import {render} from '../../../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from '../pages/layout.js';
import { getUserData } from './util.js';
import { homePage } from '../pages/home.js';

//TODO change root selector
const root = document.querySelector('body');

page(decorateContext);
page('/Applications/Template/index.html', homePage);
page('/', homePage);

page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;

    next();
}

//TODO Inject dependencies
function renderView(content){
    const userData = getUserData()
    render(layoutTemplate(userData, content), root)
}
