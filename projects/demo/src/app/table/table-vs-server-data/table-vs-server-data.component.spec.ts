import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVsServerDataComponent } from './table-vs-server-data.component';

describe('TableVsServerDataComponent', () => {
  let component: TableVsServerDataComponent;
  let fixture: ComponentFixture<TableVsServerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVsServerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVsServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
