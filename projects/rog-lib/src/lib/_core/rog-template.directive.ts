import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[rogTemplate]'
})
export class RogTemplateDirective {
  @Input('rogTemplate') key: string;

  constructor(public template: TemplateRef<any>) {}
}
