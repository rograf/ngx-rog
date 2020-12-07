import { PaginatorService, IPaginatorOptions } from './paginator.service';
import { FormsModule } from '@angular/forms';
import { RogModule } from './../_core/core.module';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';



@NgModule({
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RogModule
  ]
})
export class PaginatorModule {

  constructor(@Optional() @SkipSelf() parentModule?: PaginatorModule) {
    if (parentModule) {
      throw new Error(
        'PaginatorModule is already loaded');
    }
  }

  static forRoot(paginatorConfig: IPaginatorOptions = {}): ModuleWithProviders<PaginatorModule> {
    return {
      ngModule: PaginatorModule,
      providers: [
        PaginatorService,
        {provide: 'paginatorConfig', useValue: paginatorConfig}
      ]
    };
  }

  static forChild(): ModuleWithProviders<PaginatorModule> {
    return {
      ngModule: PaginatorModule,
      providers: [
        PaginatorService,
      ]
    };
  }

}
