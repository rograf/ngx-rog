import { TestBed } from '@angular/core/testing';

import { RogLibService } from './rog-lib.service';

describe('RogLibService', () => {
  let service: RogLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RogLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
