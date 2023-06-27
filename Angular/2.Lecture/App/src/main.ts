import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Article } from './app/app.module';





platformBrowserDynamic().bootstrapModule(Article)
  .catch(err => console.error(err));

