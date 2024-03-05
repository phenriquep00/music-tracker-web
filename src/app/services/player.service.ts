import { BehaviorSubject, Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';
import { newTrack } from '../commom/factories';
import { ITrack } from '../models/ITrack';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{


  isPlayButtonActive: boolean = true;
  isPauseButtonActive: boolean = false;

  constructor(private spotifyService: SpotifyService,) {}

  ngOnInit(): void {
      
  }

  showPlayButton() {
    this.isPlayButtonActive = true;
    this.isPauseButtonActive = false;
  }

  showPauseButton() {
    this.isPauseButtonActive = true;
    this.isPlayButtonActive = false;
  }
  

  async previousTrack() {
    await this.spotifyService.spotifyApi.skipToPrevious();
    this.showPauseButton();
  }

  async nextTrack() {
    await this.spotifyService.spotifyApi.skipToNext();
    this.showPauseButton();
  }

  async togglePlayPause() {
    
    const playbackState = await this.spotifyService.spotifyApi.getMyCurrentPlaybackState();
    if (playbackState.is_playing){
      await this.spotifyService.spotifyApi.pause();
      this.showPlayButton();
    } else {
      await this.spotifyService.spotifyApi.play();
      this.showPauseButton();
    }
    
  }
}