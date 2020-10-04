import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RogLibComponent } from './rog-lib.component';

describe('RogLibComponent', () => {
  let component: RogLibComponent;
  let fixture: ComponentFixture<RogLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RogLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RogLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
