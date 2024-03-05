import { Component, Input } from '@angular/core';
import { IArtist } from '../../models/IArtist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.css'
})
export class ArtistCardComponent {
  @Input()
  artist!: IArtist;
}
