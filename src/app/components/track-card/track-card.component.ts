import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITrack } from '../../models/ITrack';
import { formatTrackDuration } from '../../utils/TrackBO';

@Component({
  selector: 'app-track-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-card.component.html',
  styleUrl: './track-card.component.css'
})
export class TrackCardComponent {

  @Input()
  track!: ITrack;

  @Input()
  index!: number;

  getTrackDuration = (durationMS: number) => {
    return formatTrackDuration(durationMS);
  }
}
