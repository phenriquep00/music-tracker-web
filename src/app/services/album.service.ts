import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  recentAlbums = [];
  album = [];

  constructor() { }

  getUserRecentAlbums = async () => {
    await fetch("http://localhost:8080/album/get-user-recent-albums")
      .then(response => response.json())
      .then(res => {
        this.recentAlbums = res
      })
      .catch(e => {
        console.error(e);
      })
  };

  getAlbumById = async (albumId: string) => {
    await fetch(`http://localhost:8080/album/get-album/${albumId}`)
      .then(response => response.json())
      .then(res => {
        this.album = res;
        return this.album;
      })

      return this.album;
  }
}
