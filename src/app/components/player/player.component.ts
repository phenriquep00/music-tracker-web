import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PlayerService } from '../../services/player.service';
import { SpotifyService } from '../../services/spotify.service';
import { ITrack } from '../../models/ITrack';
import { newTrack } from '../../commom/factories';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit {

  currentPlayerIcon: string = 'play_arrow';

  currentTrack: ITrack = newTrack();

  constructor(private userService: UserService, public playerService: PlayerService, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    
  }

  previous() {
    this.playerService.previousTrack();
  }

  next() {
    this.playerService.nextTrack();
  }

  togglePlayer() {
    this.playerService.togglePlayPause();
  }

}
