import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private userService: UserService
  ) { }

  getUserTopArtists = () => {
    this.userService.getUserTopArtists();
  }
}
