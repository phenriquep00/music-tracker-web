import { Injectable } from '@angular/core';
import { ITrack } from '../models/ITrack';

@Injectable({
  providedIn: 'root'
})
export class RecomendationService {

  recommendedTracks = [];

  constructor() { }

  getTrackRecomendations = async () => {
    await fetch("http://localhost:8080/recommendations/get-track-recommendations")
    .then(response => response.json())
    .then(res => {
      this.recommendedTracks = res
    })
    .catch(e => {
      console.error(e);
    })
  }
}
