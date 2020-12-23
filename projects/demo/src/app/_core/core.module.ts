import { RgSearchModule } from './../../../../ngx-rg/src/lib/search/search.module';
import { RgTableModule } from './../../../../ngx-rg/src/lib/table/table.module';
import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RgModule } from '../../../../ngx-rg/src/lib/_core/rg-core.module';
import { SkipSelf } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RgModule.forRoot({symbolToReverse: '-'}),
    RgTableModule.forRoot(),
    RgSearchModule,
  ],
  exports: [RgSearchModule]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }

  static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }

}
