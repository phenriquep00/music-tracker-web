import { Injectable } from '@angular/core';
import { IArtist } from '../models/IArtist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  userTopArtists: IArtist[] = [];

  constructor() { }

  getUserTopArtists = async () => {
    console.log('inside user service -> get user top artists')
    await fetch("http://localhost:8080/artist/user-top-artists")
      .then(response => response.json())
      .then(result => this.userTopArtists = result)
      .catch(e => {
        console.error(e);
      }) 
  }
}
