import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { UserService } from '../../services/user.service';
import { AlbumCardComponent } from './album-card/album-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AlbumCardComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  //recentAlbums: Array<any> = [];

  constructor(public albumService: AlbumService, public userService: UserService) { }

  ngOnInit(): void {
    
  }

}
