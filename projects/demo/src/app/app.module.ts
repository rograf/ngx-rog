import { RogModule } from './../../../rog-lib/src/lib/_core/core.module';
import { RogTableModule } from './../../../rog-lib/src/lib/table/table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableVsComponent } from './table-vs/table-vs.component';
import { TablePagComponent } from './table-pag/table-pag.component';
import { TableVsPagComponent } from './table-vs-pag/table-vs-pag.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableVsComponent,
    TablePagComponent,
    TableVsPagComponent
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
