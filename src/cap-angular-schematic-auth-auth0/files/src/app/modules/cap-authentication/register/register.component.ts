import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  userRegisterData(UserData: any) {
    // console.log(UserData);
  }
  userRegisterError(UserError: any) {
    // console.log(UserError);
  }
  userRegisterJWT(JWT: any) {
    // console.log(JWT);
  }
}
