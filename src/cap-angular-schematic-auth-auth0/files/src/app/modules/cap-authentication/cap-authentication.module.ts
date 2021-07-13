
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapAuthenticationRoutingModule } from './cap-authentication-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { environment } from '../../../environments/environment';
import { ProfileComponent } from './profile/profile.component';
import { ForgotComponent } from './forgot/forgot.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationModule } from 'cap-authentication';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotComponent,
    VerifyComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CapAuthenticationRoutingModule,
    AuthenticationModule.forRoot({
      clientId: environment.clientId,
      clientSecret: environment.clientSecret,
      domain: environment.domain,
      endPoint: '<%=endPoint%>'
    })
  ],
  exports: [
    AuthenticationModule,
    ChangePasswordComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotComponent,
    VerifyComponent,
    LoginComponent
  ],
  providers:[
    CookieService
  ]
})
export class CapAuthenticationModule {}
