import { FormsModule } from '@angular/forms';
import { PaginatorModule } from './../paginator/paginator.module';
import { RogModule } from './../_core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RogTableComponent } from './table.component';
import { SearchModule } from '../search/search.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RogTableComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    SearchModule,
    RouterModule.forRoot([]),
    RogModule
  ],
  exports: [RogTableComponent]
})
export class RogTableModule { }
