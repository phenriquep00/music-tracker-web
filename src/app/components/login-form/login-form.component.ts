import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private toastService: ToastService
  ) { }

  model = { username: '', password: '' };

  async onSubmit() {
    if (!this.model.username) {
      this.toastService.showToast('Please enter a username', 'warning');
      return;
    }

    if (!this.model.password) {
      this.toastService.showToast('Please enter a password', 'warning');
      return;
    }

    try {
      
      const data = await this.userService.getUser(this.model.username, this.model.password)
      .then((response) => {
        if (response === null) {
          this.toastService.showToast('Invalid username or password', 'warning');
          return;
        }
      });

      console.log(data);
      this.userService.setUserModel(data);
      this.router.navigate(['/home']);
      console.log(this.userService.getUserState());

    } catch (error: any) {
      // Handle any errors that occurred during the execution of the asynchronous code
      console.error('An error occurred:', error);
  
      // Check if the error has a 'status' property and if it's a 404 (Not Found)
      if (error.status === 404) {
        this.toastService.showToast('User not found. Please register.', 'warning');
      } else if (error.status === 401) {
        this.toastService.showToast('Invalid username or password', 'warning');
      }
      else {
        // Handle other types of errors
        // You can display a generic error message to the user if needed
        this.toastService.showToast('An error occurred while processing your request, please try again', 'warning');
      }
    }
  }

}
