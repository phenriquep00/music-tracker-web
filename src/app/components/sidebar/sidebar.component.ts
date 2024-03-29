import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { UserService } from '../../services/user.service';
import { AlbumCardComponent } from './album-card/album-card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AlbumCardComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  //recentAlbums: Array<any> = [];

  constructor( private router: Router ,public albumService: AlbumService, public userService: UserService) { }

  ngOnInit(): void {
    
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  goToSearchPage() {
    this.router.navigate(['/search']);
  }
}
