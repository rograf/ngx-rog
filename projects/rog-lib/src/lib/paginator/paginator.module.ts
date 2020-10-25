import { FormsModule } from '@angular/forms';
import { RogModule } from './../_core/core.module';
import { NgModule } from '@angular/core';
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
export class PaginatorModule { }
