import { TestBed } from '@angular/core/testing';

import { RgConfigService } from './rg-config.service';

describe('ConfigService', () => {
  let service: RgConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RgConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
