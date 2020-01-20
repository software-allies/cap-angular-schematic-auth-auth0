import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { canActivaOutService} from './canActivate-out.service';
import { canActivaInService } from './canActivate-in.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [canActivaOutService]},
  { path: 'login', component: LoginComponent, canActivate: [canActivaOutService]},
  { path: 'forgot-password', component: ForgotComponent, canActivate: [canActivaOutService]},
  { path: 'profile', component : ProfileComponent, canActivate: [canActivaInService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
