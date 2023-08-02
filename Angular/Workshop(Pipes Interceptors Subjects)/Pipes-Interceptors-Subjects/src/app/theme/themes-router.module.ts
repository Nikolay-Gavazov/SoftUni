import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [

    {
        path: 'themes',
        component: MainComponent,
    },
    {
        path: 'themes/:id',
        component: DetailsComponent,
        /* canActivate:[AuthActivate] */
    },
    {
        path: 'create',
        component: CreateComponent,
        /* canActivate:[AuthActivate] */
    },

]

export const ThemeRoutingModule = RouterModule.forChild(routes);