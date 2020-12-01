import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVsPagComponent } from './table-vs-pag.component';

describe('TableVsPagComponent', () => {
  let component: TableVsPagComponent;
  let fixture: ComponentFixture<TableVsPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVsPagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVsPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
