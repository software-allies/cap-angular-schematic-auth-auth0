
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { CapAuthenticationRoutingModule } from './cap-authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';
import { AuthenticationModule } from 'cap-authentication';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ProfileComponent,
    VerifyComponent
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
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ProfileComponent,
    VerifyComponent
  ]
})
export class CapAuthenticationModule {}
