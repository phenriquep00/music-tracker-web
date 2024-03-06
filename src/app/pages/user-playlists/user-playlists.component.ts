import { Component } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { CommonModule } from '@angular/common';
import { getAlbumFullLenghtInMinutes } from '../../utils/albumBO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-playlists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-playlists.component.html',
  styleUrl: './user-playlists.component.css'
})
export class UserPlaylistsComponent {

  constructor(public playlistService: PlaylistService, private router: Router) { }

  getPlaylistDuration = (tracks: any) => {
    return getAlbumFullLenghtInMinutes(tracks)
  }

  goToPlaylistPage(playlistId: string) {
    this.router.navigate(['/playlist', playlistId])
  }
}
