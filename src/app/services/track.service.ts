import { Injectable } from '@angular/core';
import { ITrack } from '../models/ITrack';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  userTopTracks: ITrack[] = [];

  constructor() { }

  getUserTopTracks = async () => {
    await fetch("http://localhost:8080/track/get-user-top-tracks")
      .then(response => response.json())
      .then(result => this.userTopTracks = result)
      .catch(e => {
        console.error(e);
      })
  }
}
