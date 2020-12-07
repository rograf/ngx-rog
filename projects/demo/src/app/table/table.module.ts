import { TableServerDataComponent } from './table-server-data/table-server-data.component';
import { TableRoutingModule } from './table.routing';
import { TableFrontDataComponent } from './table-front-data/table-front-data.component';
import { TableComponent } from './table.component';
import { RogTableModule } from './../../../../rog-lib/src/lib/table/table.module';
import { RogModule } from './../../../../rog-lib/src/lib/_core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableVsFrontDataComponent } from './table-vs-front-data/table-vs-front-data.component';
import { TableVsServerDataComponent } from './table-vs-server-data/table-vs-server-data.component';


@NgModule({
  declarations: [TableComponent, TableFrontDataComponent, TableServerDataComponent, TableVsFrontDataComponent, TableVsServerDataComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    RogModule,
    RogTableModule.forRoot({pageSize:20})
  ]
})
export class TableModule { }
