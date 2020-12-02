import { TableVsFrontDataComponent } from './table-vs-front-data/table-vs-front-data.component';
import { TableServerDataComponent } from './table-server-data/table-server-data.component';
import { TableFrontDataComponent } from './table-front-data/table-front-data.component';
import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableVsServerDataComponent } from './table-vs-server-data/table-vs-server-data.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    children: [
      {
        path: 'front',
        component: TableFrontDataComponent
      },
      {
        path: 'server',
        component: TableServerDataComponent
      },
      {
        path: 'front-vs',
        component: TableVsFrontDataComponent
      },
      {
        path: 'server-vs',
        component: TableVsServerDataComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
