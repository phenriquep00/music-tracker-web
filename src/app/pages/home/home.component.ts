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
import { RecomendationService } from '../../services/recomendation.service';
import { TrackService } from '../../services/track.service';
import { TrackCardComponent } from '../../components/track-card/track-card.component';
import { SettingsService } from '../../services/settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArtistCardComponent, PlaylistCardComponent, TrackCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  greeting!: string;

  constructor(
    private router: Router,
    public userService: UserService,
    public artistService: ArtistService,
    public albumService: AlbumService,
    public playlistService: PlaylistService,
    public recommendationsService: RecomendationService,
    public trackService: TrackService,
    public settingService: SettingsService
  ) { 
    this.updateGreeting();
  }

  ngOnInit(): void {
    this.userService.getToken()
      .then(async () => {await this.userService.loadInitialData()})
      .then(() => console.log("top artists: ", this.artistService.userTopArtists))
      .then(() => console.log("recent albums: ", this.albumService.recentAlbums))
      .then(() => console.log("user playlists: ", this.playlistService.userPlaylists))
      //.then(() => console.log("recommended tracks: ", this.recommendationsService.recommendedTracks))
      .then(() => console.log("featured playlists: ", this.playlistService.featuredPlaylists))
      .then(() => console.log("user top tracks: ", this.trackService.userTopTracks))
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

  getRandomPlaylists(playlist: IPlaylist[]) {
    return getRandomElements(playlist, 5);
  }

  goToPlaylistsPage() {
    this.router.navigate(['/user/playlists']);
  }
}
