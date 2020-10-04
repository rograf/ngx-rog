import { RogModule } from './../_core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RogTableComponent } from './table.component';



@NgModule({
  declarations: [RogTableComponent],
  imports: [
    CommonModule,
    RogModule
  ],
  exports: [RogTableComponent]
})
export class RogTableModule { }
