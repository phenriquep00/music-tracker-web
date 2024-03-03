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
        console.log(this.recentAlbums)
        return(this.recentAlbums);
      })

      return this.recentAlbums;
  };

  getAlbumById = async (albumId: string) => {
    await fetch(`http://localhost:8080/album/get-album/${albumId}`)
      .then(response => response.json())
      .then(res => {
        this.album = res;
        console.log(res);
        return this.album;
      })

      return this.album;
  }
}
