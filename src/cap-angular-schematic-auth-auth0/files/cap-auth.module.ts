import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './cap-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationAuth0Module } from 'cap-authentication';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationAuth0Module.forRoot({
      clientId: '<%=clientID%>',
      clientSecret: '<%=clientSecret%>',
      domain: '<%=domain%>',
      endPoint: '<%=endPoint%>'
    })
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ProfileComponent,
    LogoutComponent
  ],
  entryComponents:[
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ProfileComponent,
    LogoutComponent
  ]
})
export class CapAuthModule {}
