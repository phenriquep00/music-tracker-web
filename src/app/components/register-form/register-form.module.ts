import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from "./register-form.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        RegisterFormComponent
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    exports: [
        RegisterFormComponent,
    ],
})
export class RegisterFormModule { }