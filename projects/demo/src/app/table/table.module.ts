import { SearchModule } from './../../../../ngx-rg/src/lib/search/search.module';
import { PaginatorModule } from './../../../../ngx-rg/src/lib/paginator/paginator.module';
import { TableServerDataComponent } from './table-server-data/table-server-data.component';
import { TableRoutingModule } from './table.routing';
import { TableFrontDataComponent } from './table-front-data/table-front-data.component';
import { TableComponent } from './table.component';
import { RogTableModule } from './../../../../ngx-rg/src/lib/table/table.module';
import { RogModule } from './../../../../ngx-rg/src/lib/_core/core.module';
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
    // SearchModule.forRoot({icon:'<i class="fas fa-search"></i>'}),
    // PaginatorModule.forRoot({labelLeft: 'Prev'}),
    RogTableModule.forRoot({pageSize:20})
  ]
})
export class TableModule { }
