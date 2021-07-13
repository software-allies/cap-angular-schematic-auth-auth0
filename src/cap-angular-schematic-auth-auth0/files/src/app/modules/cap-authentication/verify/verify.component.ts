import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  
  userProfileData(event) {
    // console.log('userProfileData', event);
  }
  userProfileError(event) {
    // console.log('userProfileError', event);
  }
  userProfileVerify(event) {
    // console.log('userProfileVerify', event);
  }
  forwardedMail(event) {
    // console.log('forwardedMail', event);
  }
  forwardedMailError(event) {
    // console.log('forwardedMailError', event);
  }
}