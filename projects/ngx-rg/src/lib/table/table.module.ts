import { RgTableOptions } from './_models/RgTableOptions.interface';
import { TableService } from './table.service';
import { RgPaginatorModule } from './../paginator/paginator.module';
import { RgModule } from '../_core/rg-core.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
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

  static forRoot(tableConfig: RgTableOptions = {}): ModuleWithProviders<RgTableModule> {
    return {
      ngModule: RgTableModule,
      providers: [
        TableService,
        {provide: 'tableConfig', useValue: tableConfig}
      ]
    };
  }

  static forChild(): ModuleWithProviders<RgTableModule> {
    return {
      ngModule: RgTableModule,
      providers: [
        TableService,
      ]
    };
  }

}
