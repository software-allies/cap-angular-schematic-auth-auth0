import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  
  userVerifyData(data: any) {
    // console.log('userVerifyData', data);
  }
  userVerifyError(data: any) {
    // console.log('userVerifyError', data);
  }
  userVerify(data: any) {
    // console.log('userVerify', data);
  }
  forwardedMail(data: any) {
    // console.log('forwardedMail', data);
  }
}