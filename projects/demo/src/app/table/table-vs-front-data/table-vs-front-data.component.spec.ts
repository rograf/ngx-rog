import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVsFrontDataComponent } from './table-vs-front-data.component';

describe('TableVsFrontDataComponent', () => {
  let component: TableVsFrontDataComponent;
  let fixture: ComponentFixture<TableVsFrontDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVsFrontDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVsFrontDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
