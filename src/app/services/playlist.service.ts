import { Injectable } from '@angular/core';
import { IPlaylist } from '../models/IPlaylist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  userPlaylists: IPlaylist[] = [];
  featuredPlaylists: IPlaylist[] = [];

  constructor() { }

  getUserPlaylists = async () => {
    await fetch("http://localhost:8080/playlist/user-playlists")
      .then(response => response.json())
      .then(result => this.userPlaylists = result)
      .catch(e => {
        console.error(e);
      })
  }

  getFeaturedPlaylists = async () => {
    await fetch("http://localhost:8080/playlist/user-featured-playlists")
      .then(response => response.json())
      .then(result => this.featuredPlaylists = result)
      .catch(e => {
        console.error(e);
      })
  }
}
