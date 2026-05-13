import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';

export const routes: Routes = [
    {path:'', redirectTo: 'create-user', pathMatch: 'full'},
    { path: 'create-user', component: CreateUserComponent },
    { path: 'login', component: LoginComponent },
    {path: 'home', loadComponent: () => import('../components/home/home.component').then(m => m.HomeComponent)},
    {path: 'settings', loadComponent: () => import('../components/settings/settings.component').then(m => m.SettingsComponent)}
];
