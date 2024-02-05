// album-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-card',
  standalone: true,
  templateUrl:"./album-card.component.html",
  styles: [/* Add any styles if needed */],
  imports: [CommonModule]
})
export class AlbumCardComponent {
  @Input() album: any; // Input property to pass album data to the component
}
