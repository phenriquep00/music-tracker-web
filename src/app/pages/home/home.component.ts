import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ArtistService } from '../../services/artist.service';
import { AlbumService } from '../../services/album.service';
import { ArtistCardComponent } from '../../components/artist-card/artist-card.component';
import { CommonModule } from '@angular/common';
import { PlaylistService } from '../../services/playlist.service';
import { PlaylistCardComponent } from '../../components/playlist-card/playlist-card.component';
import { getRandomElements } from '../../utils/getRandomElements';
import { IPlaylist } from '../../models/IPlaylist';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArtistCardComponent, PlaylistCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  greeting!: string;

  constructor(
    public userService: UserService,
    public artistService: ArtistService,
    public albumService: AlbumService,
    public playlistService: PlaylistService
  ) { 
    this.updateGreeting();
  }

  ngOnInit(): void {
    this.userService.getToken()
      .then(async () => {await this.userService.loadInitialData()})
      .then(() => console.log("top artists: ", this.artistService.userTopArtists))
      .then(() => console.log("recent albums: ", this.albumService.recentAlbums))
      .then(() => console.log("user playlists: ", this.playlistService.userPlaylists))
      ;
  }

  private updateGreeting() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      this.greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greeting = 'Good afternoon';
    } else {
      this.greeting = 'Good night';
    }
  }

  getRandomPlaylists() {
    return getRandomElements(this.playlistService.userPlaylists, 5);
  }
}
