import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() { }

  userLoginData(userData: any) {
    // console.log('AuthComponent', userData);
  }
  userLoginError(UserError: any) {
    // console.log('UserError', UserError);
  }

}
