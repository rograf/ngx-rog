import { FormsModule } from '@angular/forms';
import { RgModule } from '../_core/rg.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ISearchOptions, SearchService } from './search.service';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RgModule,
    FormsModule
  ],
  exports: [SearchComponent]
})
export class RgSearchModule {

  static forRoot(searchConfig: ISearchOptions = {}): ModuleWithProviders<RgSearchModule> {
    return {
      ngModule: RgSearchModule,
      providers: [
        SearchService,
        {provide: 'searchConfig', useValue: searchConfig}
      ]
    };
  }

  static forChild(): ModuleWithProviders<RgSearchModule> {
    return {
      ngModule: RgSearchModule,
      providers: [
        SearchService,
      ]
    };
  }

}
