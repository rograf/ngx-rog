import { TableService, ITableOptions } from './table.service';
import { RgPaginatorModule } from './../paginator/paginator.module';
import { RgModule } from './../_core/core.module';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RgSearchModule } from '../search/search.module';
import { RouterModule } from '@angular/router';
import { TableVsComponent } from './table-vs/table-vs.component';
import { TablePagComponent } from './table-pag/table-pag.component';
import { ListPagComponent } from './list-pag/list-pag.component';
import { ListVsComponent } from './list-vs/list-vs.component';
import { CellComponent } from './_cell/cell.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [TableComponent, TableVsComponent, TablePagComponent, ListPagComponent, ListVsComponent, CellComponent],
  imports: [
    CommonModule,
    RgPaginatorModule.forChild(),
    RgSearchModule.forChild(),
    ScrollingModule,
    RouterModule,
    RgModule
  ],
  exports: [TableComponent]
})

export class RgTableModule {

  constructor(@Optional() @SkipSelf() parentModule?: RgTableModule) {
    if (parentModule) {
      throw new Error(
        'RgTableModule is already loaded');
    }
  }

  static forRoot(tableConfig: ITableOptions = {}): ModuleWithProviders<RgTableModule> {
    return {
      ngModule: RgTableModule,
      providers: [
        TableService,
        {provide: 'tableConfig', useValue: tableConfig}
      ]
    };
  }

  static forChild(): ModuleWithProviders<RgPaginatorModule> {
    return {
      ngModule: RgPaginatorModule,
      providers: [
        TableService,
      ]
    };
  }

}
