import { FormsModule } from '@angular/forms';
import { RgModule } from './../_core/core.module';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
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

  constructor(@Optional() @SkipSelf() parentModule?: RgSearchModule) {
    // if (parentModule) {
    //   throw new Error(
    //     'RgSearchModule is already loaded');
    // }
  }

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
