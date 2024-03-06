import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { getAlbumFullLenghtInMinutes } from '../../utils/albumBO';
import { formatTrackDuration } from '../../utils/TrackBO';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-album-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-page.component.html',
  styleUrl: './album-page.component.css'
})
export class AlbumPageComponent implements OnInit, OnChanges {

  albumId!: string;
  album: any;

  constructor(private route: ActivatedRoute, private as: AlbumService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = params['albumId'];
      this.fetchAlbumData()
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['albumId'] && !changes['albumId'].firstChange) {
      this.fetchAlbumData();
    }
  }

  private fetchAlbumData(): void {
    this.loadingService.toggleIsLoadingActive();
    this.as.getAlbumById(this.albumId)
      .then(response => this.album = response)
      .then(() => this.loadingService.toggleIsLoadingActive());
  }

  getAlbumDuration = (tracks: any) => {
    return getAlbumFullLenghtInMinutes(tracks);
  }

  getTrackDuration = (durationMS: number) => {
    return formatTrackDuration(durationMS);
  }
}