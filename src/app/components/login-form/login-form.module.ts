import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    LoginFormComponent,
  ],
})
export class LoginFormModule { } 
