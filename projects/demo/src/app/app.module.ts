import { RogLibModule } from './../../../rog-lib/src/lib/rog-lib.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RogLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
