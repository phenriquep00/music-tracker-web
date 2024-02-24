import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  recentAlbums = [];

  constructor() { }

  getUserRecentAlbums = async () => {
    await fetch("http://localhost:8080/album/saved-albums")
      .then(response => response.json())
      .then(res => {
        this.recentAlbums = res
        console.log(this.recentAlbums)
        return(this.recentAlbums);
      })

      return this.recentAlbums;
  };
}
