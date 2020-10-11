import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RogTemplateDirective } from './rog-template.directive';
import { RogSortByPipe } from './rog-sort-by.pipe';

const PIPES = [
  RogSortByPipe,
  RogTemplateDirective,
]


@NgModule({
  declarations: [...PIPES],
  imports: [
    CommonModule,
  ],
  exports: [...PIPES]
})
export class RogModule { }
