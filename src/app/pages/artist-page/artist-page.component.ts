import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ActivationStart } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
import { IArtist } from '../../models/IArtist';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.css'
})
export class ArtistPageComponent implements OnInit, OnChanges{

  artistId!: string;
  artist!: IArtist;

  constructor(private route: ActivatedRoute, private loadingService: LoadingService) {}

  ngOnInit(): void {
      this.route.params.subscribe( params => {
        this.artistId = params['artistId'];
        this.fetchArtistData();
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['artistId'] && !changes['artistId'].firstChange)
        this.fetchArtistData()
  }

  private fetchArtistData(): void {

  }

}
