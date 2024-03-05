import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    public userService: UserService,
    public spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.userService.getToken();
    this.spotifyService.startSpotifyClient();
  }
}
