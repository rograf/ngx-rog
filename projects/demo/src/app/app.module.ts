import { RogModule } from './../../../rog-lib/src/lib/_core/core.module';
import { RogTableModule } from './../../../rog-lib/src/lib/table/table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RogModule,
    RogTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
