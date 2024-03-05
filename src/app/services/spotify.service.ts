import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs;
  


  constructor(private userService: UserService) { 
    this.spotifyApi = new Spotify();
  }

  startSpotifyClient = () => {
    this.userService.token$.subscribe((newToken) => {
      if (newToken !== '') 
      {
        this.spotifyApi.setAccessToken(newToken);
        console.log("client started successfuly")
      } else 
      {
        console.log("no token defined");
      }
    })
  }

  /* getCurrentTrack = async () => {
    await fetch("http://localhost:8080/player/current-track")
    .then(response => response.json())
    .then(res => {
      console.log(res)
    });
  } */

}
