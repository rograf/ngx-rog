import { FormsModule } from '@angular/forms';
import { RogModule } from './../_core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RogModule,
    FormsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
