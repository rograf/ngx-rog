import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { debounceTime, skip, distinctUntilChanged, tap } from 'rxjs/operators';

@Directive({
  selector: '[rogNgModelChange]'
})
export class RogNgModelChangeDirective {

  @Output()
  rogNgModelChange = new EventEmitter<any>();
  @Input()
  rogNgModelChangeTime = 500;

  subscription = this.ngModel.control.valueChanges.pipe(
    skip(1),
    distinctUntilChanged(),
    debounceTime(this.rogNgModelChangeTime)
  ).subscribe((value) => {
    this.rogNgModelChange.emit(value)
  });

  constructor(private ngModel: NgModel) {
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
