import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.css'
})
export class AlbumCardComponent {

  constructor(private router: Router) {}

  @Input() album: any;

  onCardClick = () => {
    this.router.navigate(['/album', this.album.id]);
  }
}