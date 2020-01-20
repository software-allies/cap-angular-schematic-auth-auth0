import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup;
  userNotValid: boolean;
  socialMedia: boolean;
  validatedForm: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.loginUserForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
    this.userNotValid = false;
    this.socialMedia = false;
    this.validatedForm = false;
  }

  ngOnInit() { }

  loginUser() {
    if (this.loginUserForm.valid) {
      this.authenticationService.loginUser(this.loginUserForm.value).subscribe((token: any) => {
        this.authenticationService.getAuth0UserInfo(token.access_token).subscribe((user: any) => {
          this.authenticationService.saveCurrentUSer({
            user: user.name,
            email: user.email,
            refresh_token: token.refresh_token,
            token: token.access_token,
            token_id: token.id_token,
            id: user.sub
          });
          this.router.navigate(['/']);
        });
      }, (error) => {
        this.userNotValid = true;
      });
    } else {
      this.validatedForm = true;
    }
  }

  signInSocialMedia(socialMedia: boolean) {
    this.socialMedia = true;
      setTimeout(() => {
        this.socialMedia = false;
      }, 3000);
  }
}
