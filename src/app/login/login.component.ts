import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastComponent } from '../components/toast/toast.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ToastComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  SpotifyUserLogin = () => {
     this.userService.getSpotifyUserLogin();
  };

}
