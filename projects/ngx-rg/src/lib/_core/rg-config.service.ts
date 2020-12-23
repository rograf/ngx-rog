import { RgConfig } from './rg-config.interface';

import { Inject, Injectable, Optional } from '@angular/core';

const defaultOptions: RgConfig = {
  symbolToReverse: '!',
}

@Injectable()
export class RgConfigService {

  config = defaultOptions;
  static instance: RgConfigService;

  constructor(@Optional() @Inject('config') config:RgConfig) {
    RgConfigService.instance = this;
    if (config) {
      this.config = {...defaultOptions, ...config}
     }
  }

}
