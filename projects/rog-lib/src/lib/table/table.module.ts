import { FormsModule } from '@angular/forms';
import { PaginatorModule } from './../paginator/paginator.module';
import { RogModule } from './../_core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RogTableComponent } from './table.component';
import { SearchModule } from '../search/search.module';
import { RouterModule } from '@angular/router';
import { TableVsComponent } from './table-vs/table-vs.component';
import { TablePagComponent } from './table-pag/table-pag.component';
import { ListPagComponent } from './list-pag/list-pag.component';
import { ListVsComponent } from './list-vs/list-vs.component';
import { CellComponent } from './_cell/cell.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [RogTableComponent, TableVsComponent, TablePagComponent, ListPagComponent, ListVsComponent, CellComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    SearchModule,
    ScrollingModule,
    RouterModule,
    RogModule
  ],
  exports: [RogTableComponent]
})
export class RogTableModule { }
