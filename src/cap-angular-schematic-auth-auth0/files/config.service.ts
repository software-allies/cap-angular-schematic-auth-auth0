import { Injectable, Optional } from '@angular/core';

export interface IConfig {
  domain: string;
  clientId: string;
  clientSecret: string;
}
@Injectable()

export class ConfigService {
  domain: string;
  clientId: string;
  clientSecret: string;
  constructor(@Optional() config: IConfig) {
    if (config) {
      this.domain = config.domain;
      this.clientId = config.clientId;
      this.clientSecret = config.clientSecret;
    }
  }
}
