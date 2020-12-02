import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFrontDataComponent } from './table-front-data.component';

describe('TableFrontDataComponent', () => {
  let component: TableFrontDataComponent;
  let fixture: ComponentFixture<TableFrontDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFrontDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFrontDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
