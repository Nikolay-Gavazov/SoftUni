import page from "./lib/page.mjs";
import {html} from './lib/lit-html.js'
import { addRender } from "./middlewares/render.js";
import { settingsView } from "./views/settings.js";


page(addRender)
page('/Applications/workShop/index.html', (ctx) => ctx.render (html `<h1>asdfsdsfb</h1>`))
page('/settings', settingsView)

page.start();