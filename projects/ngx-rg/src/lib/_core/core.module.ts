import { RgFilterPipe } from './rg-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RgTemplateDirective } from './rg-template.directive';
import { RgSortByPipe } from './rg-sort-by.pipe';
import { RgNgModelChangeDirective } from './rg-ng-model-change.directive';

const PIPES = [
  RgSortByPipe,
  RgTemplateDirective,
  RgFilterPipe,
  RgNgModelChangeDirective
]

const DIRECTIVES = [
  RgNgModelChangeDirective
]


@NgModule({
  declarations: [...PIPES, ...DIRECTIVES],
  imports: [
    CommonModule,
  ],
  providers: [...PIPES],
  exports: [...PIPES, ...DIRECTIVES]
})
export class RgModule { }
