import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from '../main/main.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [

    {
        path: 'themes',
        component: MainComponent,
      },
      {
        path: 'themes/create',
        component: CreateComponent,
      },
    {
        path: 'themes/details/:id',
        component: DetailsComponent
    }
]

export const ThemeRoutingModule = RouterModule.forChild(routes);