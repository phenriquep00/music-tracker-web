import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'search', component: SearchComponent
    },
    {
        path: 'album/:albumId', component: AlbumPageComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
