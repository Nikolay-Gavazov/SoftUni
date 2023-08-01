import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthActivate } from "../core/guards/auth.activate";

const routes: Routes = [
    { path: 'auth/login', component: LoginComponent, /* canActivate:[AuthActivate] */ },
    { path: 'auth/register', component: RegisterComponent, /* canActivate:[AuthActivate] */ },
    { path: 'auth/logout', component: LogoutComponent },
    { path: 'auth/profile', component: ProfileComponent, /* canActivate:[AuthActivate] */ },

]

export const AuthRoutingModule = RouterModule.forChild(routes);