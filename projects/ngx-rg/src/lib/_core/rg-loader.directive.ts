import { Directive, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[rgLoader]',
})
export class RgLoaderDirective {

  private isShowLoader: boolean;

  @Input()
  set rgLoader(loading: boolean) {
    this.isShowLoader = loading;
    this.toggle();
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
  }

  toggle() {
    if (this.isShowLoader) {
      this.renderer.addClass(this.el.nativeElement, 'rg-loader');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'rg-loader');
    }
  }

}
