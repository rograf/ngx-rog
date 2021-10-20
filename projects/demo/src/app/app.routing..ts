import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'table'
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
  {
    path: 'dialog',
    loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then(m => m.GridModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
