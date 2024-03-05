import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IArtist } from '../models/IArtist';
import { ArtistService } from './artist.service';
import { AlbumService } from './album.service';
import { PlaylistService } from './playlist.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private tokenSubject = new BehaviorSubject<string>('');
  token$ = this.tokenSubject.asObservable();

  constructor(private artistService: ArtistService, private albumService: AlbumService, private playlistService: PlaylistService) { }

  getToken = async () => {
    console.log('inside user-service -> getToken')
    await fetch("http://localhost:8080/auth/token-callback")
      .then(response => response.text())
      .then(text => {
        this.tokenSubject.next(text);
      });
  }

  resetToken = () => {
    this.tokenSubject.next('')
  }

  loadInitialData = async () => {
    await this.artistService.getUserTopArtists()
      .then(async () => await this.albumService.getUserRecentAlbums())
      .then(async () => await this.playlistService.getUserPlaylists())
      ;
  }

}
