import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createUserForm: FormGroup;
  existingUser: boolean;
  socialMedia: boolean;
  validatedForm: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.existingUser = false;
    this.createUserForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8), this.capitalLetter]),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
    this.socialMedia = false;
    this.validatedForm = false;
  }

  ngOnInit() { }

  capitalLetter(control: FormControl): { [s: string]: boolean } {
    const letterAscii = control.value.charCodeAt(0);
    if (control.value && letterAscii > 64 && letterAscii < 91) {
      return null;
    }
    return {
      capitalLetter: true
    };
  }

  createUser() {
    if (this.createUserForm.valid) {
      this.authenticationService.getAuth0Token().subscribe((token: any) => {
        this.authenticationService.createUser(this.createUserForm.value, token).subscribe((user: any) => {
          if (user) {
            this.authenticationService.loginUser(this.createUserForm.value).subscribe((AccessToken: any) => {
              this.authenticationService.saveCurrentUSer({
                user: user.name,
                email: user.email,
                refresh_token: AccessToken.refresh_token,
                token: AccessToken.access_token,
                token_id: AccessToken.id_token,
                id: user.user_id
              });
              this.router.navigate(['/']);
            });
          }
        }, (error) => {
          if (error.status === 409) {
            this.existingUser = true;
          }
        });
      });
    } else {
      this.validatedForm = true;
    }
  }

  signUpSocialMedia(socialMedia: boolean) {
    this.socialMedia = true;
      setTimeout(() => {
        this.socialMedia = false;
      }, 3000);
  }

}
