import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RogTemplateDirective } from './rog-template.directive';



@NgModule({
  declarations: [RogTemplateDirective],
  imports: [
    CommonModule,
  ],
  exports: [RogTemplateDirective]
})
export class RogModule { }
