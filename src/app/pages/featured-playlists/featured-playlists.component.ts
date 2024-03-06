import { Component } from '@angular/core';
import { getAlbumFullLenghtInMinutes } from '../../utils/albumBO';
import { PlaylistService } from '../../services/playlist.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-playlists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-playlists.component.html',
  styleUrl: './featured-playlists.component.css'
})
export class FeaturedPlaylistsComponent {
  constructor(public playlistService: PlaylistService, private router: Router) { }

  getPlaylistDuration = (tracks: any) => {
    return getAlbumFullLenghtInMinutes(tracks)
  }

  goToPlaylistPage(playlistId: string) {
    this.router.navigate(['/playlist', playlistId])
  }
}
