import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVsComponent } from './table-vs.component';

describe('TableVsComponent', () => {
  let component: TableVsComponent;
  let fixture: ComponentFixture<TableVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
