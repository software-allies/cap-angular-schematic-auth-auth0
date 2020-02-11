# cap-angular-schematic-auth-auth0 [![Generic badge](https://img.shields.io/badge/CAP-Active-<COLOR>.svg)](https://shields.io/)

## What are schematics?
Schematics are generators that transform an existing filesystem. They can create files, refactor existing files, or move files around.

What distinguishes Schematics from other generators, such as Yeoman or Yarn Create, is that schematics are purely descriptive; no changes are applied to the actual filesystem until everything is ready to be committed. There is no side effect, by design, in Schematics.


## **Previous requirements**
**cap-angular-schematic-auth-auth0** use bootstrap's classes. To be able to display the component in the right way. Schematic install bootstrap automatically to the most recent version and you have to configure the `angular.json` and write into `styles` [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/):

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.scss"
]
```
 
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

Next, the Schematic will create a component for each of the authentication actions along with the routing configuration.

```
modules
    |
    cap-modules
        |-- forgot/
        |-- login/
        |-- logout/
        |-- profile/
        |-- register/
        |-- routing.ts 
        |-- service.ts
        |-- module.ts
        
```

