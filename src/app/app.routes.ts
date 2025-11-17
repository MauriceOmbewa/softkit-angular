import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'home', component: App },
    { path: 'about', component: App },
    { path: 'blogs', component: App },
    { path: '**', redirectTo: ''}
];
