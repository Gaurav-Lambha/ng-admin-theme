import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutes
  ],
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent, RegisterComponent,RecoverPasswordComponent]
})
export class AuthModule { }
