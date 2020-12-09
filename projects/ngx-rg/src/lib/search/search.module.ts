import { FormsModule } from '@angular/forms';
import { RogModule } from './../_core/core.module';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ISearchOptions, SearchService } from './search.service';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RogModule,
    FormsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule {

  constructor(@Optional() @SkipSelf() parentModule?: SearchModule) {
    if (parentModule) {
      throw new Error(
        'SearchModule is already loaded');
    }
  }

  static forRoot(searchConfig: ISearchOptions = {}): ModuleWithProviders<SearchModule> {
    return {
      ngModule: SearchModule,
      providers: [
        SearchService,
        {provide: 'searchConfig', useValue: searchConfig}
      ]
    };
  }

  static forChild(): ModuleWithProviders<SearchModule> {
    return {
      ngModule: SearchModule,
      providers: [
        SearchService,
      ]
    };
  }

}
