import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  model = {
    email: '',
    username: '',
    name: '',
    password: '',
    picture: ''
  }

  async onSubmit() {

    if (!this.model.email || !this.model.username || !this.model.name || !this.model.password || !this.model.picture) {
      this.toastService.showToast('Please fill out all fields', 'warning');
      return;
    }

    try {
      const response = await this.userService.createUser(this.model);

      if (typeof response === 'string') {
        
        this.toastService.showToast(response, 'warning');
        console.error('Error creating user', response);
      } else {
        
        this.toastService.showToast('User created successfully', 'success');
        console.log('User created successfully', response);

        this.router.navigate(['/login']);
      }
    } catch (error) {
      
      this.toastService.showToast('Error creating user', 'warning');
      console.error('Error creating user', error);
    }
  }


}
