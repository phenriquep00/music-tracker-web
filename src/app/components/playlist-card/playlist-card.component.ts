import { Component, Input } from '@angular/core';
import { IPlaylist } from '../../models/IPlaylist';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.css'
})
export class PlaylistCardComponent {
  @Input()
  playlist!: IPlaylist;

  constructor(private router: Router) {}

  onCardClick = () => {
    this.router.navigate(['/playlist', this.playlist.id]);
  }
}
