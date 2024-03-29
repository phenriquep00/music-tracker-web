import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { UserPlaylistsComponent } from './pages/user-playlists/user-playlists.component';
import { FeaturedPlaylistsComponent } from './pages/featured-playlists/featured-playlists.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'album/:albumId', component: AlbumPageComponent },
    { path: 'playlist/:playlistId', component: PlaylistPageComponent },
    { path: 'user/playlists', component: UserPlaylistsComponent },
    { path: 'featured/playlists', component: FeaturedPlaylistsComponent },
    { path: 'artist/:artistId', component: ArtistPageComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];
  
