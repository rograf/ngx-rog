import { RgConfigService } from './rg-config.service';
import { RgConfig } from './rg-config.interface';
import { RgFilterPipe } from './rg-filter.pipe';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RgTemplateDirective } from './rg-template.directive';
import { RgSortByPipe } from './rg-sort-by.pipe';
import { RgModelChangeDirective } from './rg-model-change.directive';

const PIPES = [
  RgSortByPipe,
  RgTemplateDirective,
  RgFilterPipe,
  RgModelChangeDirective
]

const DIRECTIVES = [
  RgModelChangeDirective
]

@NgModule({
  declarations: [...PIPES, ...DIRECTIVES],
  imports: [
    CommonModule,
  ],
  providers: [...PIPES],
  exports: [...PIPES, ...DIRECTIVES],
})
export class RgModule {

  static forRoot(config: RgConfig = {}): ModuleWithProviders<RgModule> {
    return {
      ngModule: RgModule,
      providers: [
        RgConfigService,
        {provide: 'config', useValue: config}
      ],
    };
  }

  static forChild(): ModuleWithProviders<RgModule> {
    return {
      ngModule: RgModule,
      providers: [
        RgConfigService,
      ]
    };
  }

}
