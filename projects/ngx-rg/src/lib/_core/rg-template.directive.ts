import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[rgTemplate]'
})
export class RgTemplateDirective {
  @Input('rgTemplate') key: string;

  constructor(public template: TemplateRef<any>) {}
}
