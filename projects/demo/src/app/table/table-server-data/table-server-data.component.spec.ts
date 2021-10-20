import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServerDataComponent } from './table-server-data.component';

describe('TableServerDataComponent', () => {
  let component: TableServerDataComponent;
  let fixture: ComponentFixture<TableServerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableServerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
