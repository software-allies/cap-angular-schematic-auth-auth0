# cap-angular-schematic-auth-auth0 [![Generic badge](https://img.shields.io/badge/CAP-Active-<COLOR>.svg)](https://shields.io/)

## What are schematics?
Schematics are generators that transform an existing filesystem. They can create files, refactor existing files, or move files around.

What distinguishes Schematics from other generators, such as Yeoman or Yarn Create, is that schematics are purely descriptive; no changes are applied to the actual filesystem until everything is ready to be committed. There is no side effect, by design, in Schematics.


## **Previous requirements**
**cap-angular-schematic-auth-auth0** use bootstrap's classes, You can use a CAP product to configure and install bootstrap to your project the installation is as follows.

```
ng add cap-angular-schematic-bootstrap@latest 4.0.0 true
```
![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-auth-auth0/development/assets/images/cap-angular-schematic-bootstrap.png "cap-angular-schematic-bootstrap")

 
## **Usage**
`Note`: the schematic only works within an angular project.

To run the schematic you have to execute the following command on your terminal.

```
ng add cap-angular-schematic-auth-auth0
```

![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-auth-auth0/development/assets/images/cap-angular-schematic-auth-auth0.png "cap-angular-schematic-auth-auth0")


previously the schematic will ask the Auth0 authentication services credentials to be configured in the module.

* Set your Auth0 Client ID : < your-client-id >
* Set your Auth0 Client Secret : < your-client-secret >
* Set your Auth0 Domain : < your-domain >
* Set your Auth0 EndPoint : < end-point > (OPTIONAL)

Next, the Schematic will create a component for each of the authentication actions along with the routing configuration.

```
modules
    |
    cap-authentication
        |-- forgot/
        |-- login/
        |-- profile/
        |-- register/
        |-- routing.ts 
        |-- module.ts
```

Now you can run your server from your angular project that we just modified and open the browser at `http://localhost:4200/` and navigate on the different routes of the components of this schematic.

* Login `/auth/login`

![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-auth-auth0/development/assets/images/login.png "Login")

* Register `/auth/register`

![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-auth-auth0/development/assets/images/register.png "Register")

* Forgot `/auth/forgot-password`

![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-auth-auth0/development/assets/images/forgot.png "Forgot-Password")

* Profile `/auth/profile`

![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-auth-auth0/development/assets/images/profile.png "Profile")

* LogOut function 

```
import { AuthenticationService } from 'cap-authentication';

export class Component implements OnInit {
  constructor (public authenticationService: AuthenticationService) { }
  
  logoutFunction() {
   this.authenticationService.signOut() // Return to home page 
  }
}
```

