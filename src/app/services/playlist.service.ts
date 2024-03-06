import { Injectable } from '@angular/core';
import { IPlaylist } from '../models/IPlaylist';
import { createNewPlaylist } from '../helper/factories';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  userPlaylists: IPlaylist[] = [];
  featuredPlaylists: IPlaylist[] = [];
  playlist!: IPlaylist;

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

  getPlaylistById = async (id: string): Promise<IPlaylist> => {
    try {
      const response = await fetch(`http://localhost:8080/playlist/get-playlist/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const json = await response.json();
      this.playlist = json;
      console.log(json);
      return this.playlist;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching playlist data');
    }
    
  }
}
