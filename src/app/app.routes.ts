import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './user/album/album.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent},
    { path: 'user/album', component: AlbumComponent},
    { path: 'search', component: SearchComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
