import { PaginatorService, IPaginatorOptions } from './paginator.service';
import { FormsModule } from '@angular/forms';
import { RgModule } from './../_core/core.module';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';



@NgModule({
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RgModule
  ]
})
export class RgPaginatorModule {

  constructor(@Optional() @SkipSelf() parentModule?: RgPaginatorModule) {
    // if (parentModule) {
    //   throw new Error(
    //     'RgPaginatorModule is already loaded');
    // }
  }

  static forRoot(paginatorConfig: IPaginatorOptions = {}): ModuleWithProviders<RgPaginatorModule> {
    return {
      ngModule: RgPaginatorModule,
      providers: [
        PaginatorService,
        {provide: 'paginatorConfig', useValue: paginatorConfig}
      ]
    };
  }

  static forChild(): ModuleWithProviders<RgPaginatorModule> {
    return {
      ngModule: RgPaginatorModule,
      providers: [
        PaginatorService,
      ]
    };
  }

}
