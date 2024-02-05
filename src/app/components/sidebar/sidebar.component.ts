import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

// Import CommonModule
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, AlbumCardComponent]
})
export class SidebarComponent {

  userSavedAlbums: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getSavedAlbums();
  }

  getSavedAlbums = async () => {
    this.userSavedAlbums = await this.userService.getUserSavedAlbums();
  };
}
