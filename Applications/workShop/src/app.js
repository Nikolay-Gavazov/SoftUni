import page from "./lib/page.mjs";

import { addRender } from "./middlewares/render.js";
import { settingsView } from "./views/settings.js";
import { loginView } from "./views/login.js";
import { islandsView } from "./views/islands.js";
import { addSession } from "./middlewares/session.js";


page(addSession)
page(addRender)
page('/', '/Applications/workShop/index.html')
page('/Applications/workShop/index.html', islandsView)
page('/settings', settingsView)
page('/login', loginView)


page.start();