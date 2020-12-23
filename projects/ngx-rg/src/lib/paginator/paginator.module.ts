import { PaginatorService, IPaginatorOptions } from './paginator.service';
import { FormsModule } from '@angular/forms';
import { RgModule } from '../_core/rg-core.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
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
