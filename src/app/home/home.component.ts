import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
