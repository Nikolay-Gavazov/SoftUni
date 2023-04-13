import page from "./lib/page.mjs";

import { addRender } from "./middlewares/render.js";
import { addSession } from "./middlewares/session.js";
import { addStorage } from "./middlewares/storage.js";
import { addSelection } from "./middlewares/selection.js";

import { settingsView } from "./views/settings.js";
import { loginView } from "./views/login.js";
import { islandsView } from "./views/islands.js";
import { registerView } from "./views/register.js";
import { populationView } from "./views/populations.js";
import { ascensionView } from "./views/ascension.js";
import { needsView } from "./views/needs.js";

page('/:island/:mode', addSelection);
page(addSession);
page(addStorage);
page(addRender);
page('/', '/Applications/workShop/index.html');
page('/Applications/workShop/index.html', islandsView);
page('/settings', settingsView);
page('/login', loginView);
page('/register', registerView)
page('/:island/population', populationView);
page('/:island/ascension', ascensionView);
page('/:island/needs', needsView);

page.start();