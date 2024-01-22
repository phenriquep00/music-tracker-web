import { Component } from '@angular/core';
import { RegisterFormModule } from '../components/register-form/register-form.module';
import { ToastComponent } from '../components/toast/toast.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RegisterFormModule,
    ToastComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
