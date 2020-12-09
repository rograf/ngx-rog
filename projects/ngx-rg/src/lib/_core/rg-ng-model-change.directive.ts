import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { debounceTime, skip, distinctUntilChanged, tap } from 'rxjs/operators';

@Directive({
  selector: '[rgNgModelChange]'
})
export class RgNgModelChangeDirective {

  @Output()
  rgNgModelChange = new EventEmitter<any>();

  _delay = 500;
  subscription;

  @Input('rgNgModelChangeDelay') set delay (value){
    // if(!value && value !== 0){
    //   value = 500
    // }
    // this._delay = value;
    // this.setSubscription();
  }
  get delay(){
    return this._delay;
  }

  setSubscription(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    this.subscription = this.ngModel.control.valueChanges.pipe(
      skip(1),
      distinctUntilChanged(),
      debounceTime(this.delay)
    ).subscribe((value) => {
      this.rgNgModelChange.emit(value)
    });
  }

  // ngAfterViewInit(): void {
  //   if(!this.subscription){
  //   }
  // }

  constructor(private ngModel: NgModel) {
    this.setSubscription();
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}