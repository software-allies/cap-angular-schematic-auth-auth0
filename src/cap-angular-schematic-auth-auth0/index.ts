import { strings } from '@angular-devkit/core';
import { 
  apply,
  template,
  branchAndMerge,
  chain,
  forEach,
  FileEntry,
  mergeWith,
  move,
  Rule,
  SchematicsException,
  Tree,
  url,
  SchematicContext
 } from '@angular-devkit/schematics';
import { FileSystemSchematicContext } from '@angular-devkit/schematics/tools';
import { InsertChange } from '@schematics/angular/utility/change';
import { getWorkspace } from '@schematics/angular/utility/config';
import {
  buildRelativePath,
  findModule, 
  MODULE_EXT, 
  ROUTING_MODULE_EXT
} from '@schematics/angular/utility/find-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { buildDefaultPath } from '@schematics/angular/utility/project';
import { getProjectFromWorkspace } from '@angular/cdk/schematics/utils/get-project';
import {
  addImportToModule
 } from './vendored-ast-utils';
import { Schema as SchemaOptions } from './schema';
import * as ts from 'typescript';
import {
  addPackageJsonDependency,
  NodeDependency,
  NodeDependencyType
} from 'schematics-utilities';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addEnvironmentVar, appendToStartFile } from './cap-utils';
import { getAppName  } from './cap-utils/package';


function readIntoSourceFile(host: Tree, filePath: string) {
  const text = host.read(filePath);
  if (text === null) {
    throw new SchematicsException(`File ${filePath} does not exist.`);
  }
  return ts.createSourceFile(filePath, text.toString('utf-8'), ts.ScriptTarget.Latest, true);
}

function addToNgModule(options: SchemaOptions): Rule {
  return (host: Tree) => {
    
    const modulePath = options.module;
    // Import CapAuthenticationModule and declare
    let source = readIntoSourceFile(host, modulePath);

    const componentPath = `${options.path}/app/modules/cap-authentication/cap-authentication.module`;
    const relativePath = buildRelativePath(modulePath, componentPath);
    const classifiedName = 'CapAuthenticationModule';
    const importRecorder = host.beginUpdate(modulePath);
    const importChanges: any = addImportToModule(
      source,
      modulePath,
      classifiedName,
      relativePath
    );

    for (const change of importChanges) {
        if (change instanceof InsertChange) {
          importRecorder.insertLeft(change.pos, change.toAdd);
        }
    }
    host.commitUpdate(importRecorder);

    return host;
  };
}

function addToEnvironments(options: SchemaOptions): Rule {
  return (host: Tree) => {
    // development environment
    addEnvironmentVar(host, '', options.path || '/src', 'clientId', options.credentials ? options.clientID : '');
    addEnvironmentVar(host, '', options.path || '/src', 'clientSecret', options.credentials ? options.clientSecret : '');
    addEnvironmentVar(host, '', options.path || '/src', 'domain', options.credentials ? options.domain: '');
    if (options.credentials) {
      addEnvironmentVar(host, 'prod', options.path || '/src', 'clientId', options.credentials ? options.clientID : '');
      addEnvironmentVar(host, 'prod', options.path || '/src', 'clientSecret', options.credentials ? options.clientSecret : '');
      addEnvironmentVar(host, 'prod', options.path || '/src', 'domain', options.credentials ? options.domain: '');
    }
  }
}

function appendToStylesFile(path: string): Rule {
  return (host: Tree) => {
    const content = `
/*
*
* ==========================================
* AUTHENTICATION STYLES
* ==========================================
*
*/

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
}

.box > div {
  height: max-content !important;
  border-radius: 12px !important;
  font-family: "Segoe UI","Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
  padding: 50px !important;
  width: 550px !important;
  margin: 0 !important;
  color: #000;
  background-color:  #e9ecef;
}

.box > div > form > div input {
  border-radius: 12px !important;
  // background-color: #e2e3e5;
  // background-color:  #e9ecef;
  border-color: #000;
}

.box > div > form > div input:focus {
  border-radius: 12px !important;
  outline:none !important;
  outline-width: 0 !important;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border-color: #000;
  // background-color: #e9ecef;
  border-width: 1.5px;
}

.box > div > form > div small a {
  color: #000;
}

.box > div > form button {
  margin-top: 2em !important;
  border-radius: 12px !important;
  background-color: #000 ;
  border-color: #000;
  color: #fff;
}

.box > div > form button:hover {
  background-color: #343a40;
  border-color: #343a40;
}

.box > div > form button:focus {
  background-color: #343a40 !important;
  border-color: #343a40 !important;
  box-shadow: none !important;
}

.box > div > form button:active {
  background-color: #343a40 !important;
  border-color: #343a40 !important;
  box-shadow: none !important;
  transform: translateY(1.5px);
}

.box > div > div > form > div > div > div >input {
  border-radius: 12px !important;
  border-color: #000;
}

.box > div > div > form > div > div > div >input:focus {
  border-radius: 12px !important;
  outline:none !important;
  outline-width: 0 !important;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border-color: #000;
  // background-color: #e9ecef;
  border-width: 1.5px;
}

.box > div > div > form > div > div > button {
  margin-top: 2em !important;
  border-radius: 12px !important;
  background-color: #000;
  border-color: #000;
  color: #fff;
}

.box > div > div > form > div > div > button:hover {
  background-color: #343a40;
  border-color: #343a40;
}

.box > div > div > form > div > div > button:focus {
  background-color: #343a40 !important;
  border-color: #343a40 !important;
  box-shadow: none !important;
}

.box > div > div > form > div > div > button:active {
  background-color: #343a40 !important;
  border-color: #343a40 !important;
  box-shadow: none !important;
  transform: translateY(1.5px);
}

.box > div > div > div > div > button {
  margin-top: 2em !important;
  border-radius: 12px !important;
  background-color: #000;
  border-color: #000;
  color: #fff ;
}

.box > div > div > div > div > button:hover {
  background-color: #343a40;
  border-color: #343a40;
}

.box > div > div > div > div > button:focus {
  background-color: #343a40 !important;
  border-color: #343a40 !important;
  box-shadow: none !important;
}

.box > div > div > div > div > button:active {
  background-color: #343a40 !important;
  border-color: #343a40 !important;
  box-shadow: none !important;
  transform: translateY(1.5px);
}

.box > div > div > div > div > div > button {
  // margin-top: 2em !important;
  border-radius: 12px !important;
  background-color: #000;
  border-color: #000;
  color: #fff;
}

.box > div > div > div > div > div > button:hover {
  background-color: #343a40;
  border-color: #343a40;
}

.box > div > div > div > div > div > button:focus {
  background-color: #343a40 !important;
  border-color: #343a40 !important;
  box-shadow: none !important;
}

.box > div > div > div > div > div > button:active {
  background-color: #343a40 !important;
  border-color: #343a40 !important;
  box-shadow: none !important;
  transform: translateY(1.5px);
}
`;
    appendToStartFile(host, path, content);
    return host;
  };
}

export default function (options: SchemaOptions): Rule {
  return (host: Tree, context: FileSystemSchematicContext) => {

    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    if (!project) {
      throw new SchematicsException(`Project is not defined in this workspace.`);
    }

    if (options.path === undefined) {
      options.path = buildDefaultPath(project);
    }
    options.module = findModule(host, options.path, 'app' + MODULE_EXT, ROUTING_MODULE_EXT);
    options.name = '';
    const parsedPath = parseName(options.path!, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    // Get project
    options.project = getAppName(host);
    if (!options.project) {
      throw new SchematicsException('Option "project" is required.');
    }

    // Object that will be used as context for the EJS templates.
    const baseTemplateContext = {
      ...strings,
      ...options,
    };

    // Get the styles.scss file 
    let styles = `src/styles.scss`;

    if (host.read(styles) === null) {
      styles = `src/styles.css`;
    }

    const files: any = {
      styles: styles,
    }

    const templateSource = apply(url('./files'), [
      template(baseTemplateContext),
      move(null as any, parsedPath.path),
      forEach((fileEntry: FileEntry) => {
        if (host.exists(fileEntry.path)) {
          host.overwrite(fileEntry.path, fileEntry.content);
        }
        return fileEntry;
      })
    ]);

    function addPackageJsonDependencies(): Rule {
      return (host: Tree, context: SchematicContext) => {
        const dependencies: NodeDependency[] = [
          // Here can depend install a auth0 or Firebase or else other module of cap authentication
          { type: NodeDependencyType.Default, version: '^1.1.23', name: 'cap-authentication' },
          { type: NodeDependencyType.Default, version: '^3.3.3', name: 'uuid' },
          { type: NodeDependencyType.Default, version: '^3.0.1', name: '@auth0/angular-jwt' }
        ];
        dependencies.forEach(dependency => {
          addPackageJsonDependency(host, dependency);
          context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
        });
        return host;
      };
    }

    function installPackageJsonDependencies(): Rule {
      return (host: Tree, context: SchematicContext) => {
        context.addTask(new NodePackageInstallTask());
        context.logger.log('info', `🔍 Installing packages...`);
        return host;
      };
    }

    return chain([
      branchAndMerge(chain([
        addPackageJsonDependencies(),
        installPackageJsonDependencies(),
        addToNgModule(options),
        addToEnvironments(options),
        mergeWith(templateSource),
        appendToStylesFile(files.styles)
      ])),
    ])(host, context);
  };
}
