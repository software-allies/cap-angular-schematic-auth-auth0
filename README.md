# cap-angular-schematic-auth-auth0 [![Generic badge](https://img.shields.io/badge/CAP-Active-<COLOR>.svg)](https://shields.io/)

## What are schematics?
Schematics are generators that transform an existing filesystem. They can create files, refactor existing files, or move files around.

What distinguishes Schematics from other generators, such as Yeoman or Yarn Create, is that schematics are purely descriptive; no changes are applied to the actual filesystem until everything is ready to be committed. There is no side effect, by design, in Schematics.


## **Previous requirements**
**cap-angular-schematic-auth-auth0** use cap-angular-schematic-bootstrap as a external schematic and install bootstrap 4.0.0 automatically in your project.

 
## **Usage**
`Note`: the schematic only works within an angular project.

To run the schematic you have to execute the following command on your terminal.

```
ng add cap-angular-schematic-auth-auth0
```

previously the schematic will ask the Auth0 authentication services credentials to be configured in the module.

* Set your Auth0 Client ID : < your-client-id >
* Set your Auth0 Client Secret : < your-client-secret >
* Set your Auth0 Domain : < your-domain >
* Set your Auth0 EndPoint : < end-point >

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

