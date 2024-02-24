import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  constructor(
    public ss: SettingsService,
    public us: UserService,
    private router: Router,
  ) { }

  logout = () => {
    this.us.resetToken();
    this.router.navigate(['/login']);
  }

}
