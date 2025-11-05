import { Routes } from '@angular/router';
import { App, Body, Card } from './app';

export const routes: Routes = [
    { path: '', component:App },
    { path: 'home', component: App },
    { path: 'about', component:Card },
    { path: 'blogs', component: Body },
    { path: '**', redirectTo: ''}
];
