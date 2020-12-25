import { CoreModule } from './../_core/core.module';
import { RgSearchModule } from './../../../../ngx-rg/src/lib/search/search.module';
import { RgPaginatorModule } from './../../../../ngx-rg/src/lib/paginator/paginator.module';
import { TableServerDataComponent } from './table-server-data/table-server-data.component';
import { TableRoutingModule } from './table.routing';
import { TableFrontDataComponent } from './table-front-data/table-front-data.component';
import { TableComponent } from './table.component';
import { RgTableModule } from './../../../../ngx-rg/src/lib/table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableVsFrontDataComponent } from './table-vs-front-data/table-vs-front-data.component';
import { TableVsServerDataComponent } from './table-vs-server-data/table-vs-server-data.component';


@NgModule({
  declarations: [TableComponent, TableFrontDataComponent, TableServerDataComponent, TableVsFrontDataComponent, TableVsServerDataComponent],
  imports: [
    CommonModule,
    CoreModule,
    TableRoutingModule,
    // RgSearchModule.forRoot({icon:'<i class="fas fa-search"></i>'}),
    // RgPaginatorModule.forRoot({labelLeft: 'Prev'}),
    RgTableModule.forRoot({pageSize:20, listBreakpoint: 800, search: true})
  ]
})
export class TableModule { }
