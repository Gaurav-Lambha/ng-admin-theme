import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'recover-password', component: RecoverPasswordComponent },
    ],
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
