import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IPlaylist } from '../../models/IPlaylist';
import { ActivatedRoute } from '@angular/router';
import { getAlbumFullLenghtInMinutes } from '../../utils/albumBO';
import { formatTrackDuration } from '../../utils/TrackBO';
import { PlaylistService } from '../../services/playlist.service';
import { LoadingService } from '../../services/loading.service';
import { createNewPlaylist } from '../../helper/factories';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist-page.component.html',
  styleUrl: './playlist-page.component.css'
})
export class PlaylistPageComponent implements OnInit, OnChanges{
  playlistId!: string;
  playlist!: IPlaylist;

  constructor( private route: ActivatedRoute, public playlistService: PlaylistService, private loadingService: LoadingService) {
    this.loadingService.toggleIsLoadingActive();
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.playlistId = params['playlistId']
        this.fetchPlaylistData();
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['playlistId'] && !changes['playlistId'].firstChange)
        this.fetchPlaylistData();
  }

  async fetchPlaylistData() {
    
    await this.playlistService.getPlaylistById(this.playlistId)
      .then(response => { 
        this.playlist = response
        console.log(this.playlist)
      })
      .then(() => this.loadingService.toggleIsLoadingActive());

  }

  getPlaylistDuration = (tracks: any) => {
    return getAlbumFullLenghtInMinutes(tracks)
  }

  getTrackDuration = (durationMs: number) => {
    return formatTrackDuration(durationMs);
  }
}
