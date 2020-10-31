import { RogFilterPipe } from './rog-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RogTemplateDirective } from './rog-template.directive';
import { RogSortByPipe } from './rog-sort-by.pipe';
import { RogNgModelChangeDirective } from './rog-ng-model-change.directive';

const PIPES = [
  RogSortByPipe,
  RogTemplateDirective,
  RogFilterPipe,
  RogNgModelChangeDirective
]

const DIRECTIVES = [
  RogNgModelChangeDirective
]


@NgModule({
  declarations: [...PIPES, ...DIRECTIVES],
  imports: [
    CommonModule,
  ],
  exports: [...PIPES, ...DIRECTIVES]
})
export class RogModule { }
