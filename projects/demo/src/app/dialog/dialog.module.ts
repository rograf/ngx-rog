import { CoreModule } from './../_core/core.module';
import { DialogRoutingModule } from './dialog.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    CoreModule,
    DialogRoutingModule
  ]
})
export class DialogModule { }
