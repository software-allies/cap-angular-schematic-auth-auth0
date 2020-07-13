import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  userEmail(email: any) {
    // console.log(email);
  }

  forgotPasswordRequest(request: any) {
    // console.log(request);
  }

  forgotPasswordRequestError(requestError: any) {
    // console.log(requestError);
  }

}
