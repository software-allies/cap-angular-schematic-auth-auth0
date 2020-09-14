
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';
import { GuardService } from 'cap-authentication';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'forgot-password', component: ForgotComponent},
      { path: 'profile', component : ProfileComponent, canActivate: [GuardService]},
      { path: 'verify', component: VerifyComponent, canActivate: [GuardService]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapAuthenticationRoutingModule {}
