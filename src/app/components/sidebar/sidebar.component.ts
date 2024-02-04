import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  userSavedAlbums: any[] = [];

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    try {
      this.userSavedAlbums = await this.userService.getUserSavedAlbums();
    } catch (error) {
      console.error('Error fetching user saved albums:', error);
    }
  }

  logAlbums() {
    console.log(this.userSavedAlbums);
  }

}
