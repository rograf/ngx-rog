import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPagComponent } from './list-pag.component';

describe('ListPagComponent', () => {
  let component: ListPagComponent;
  let fixture: ComponentFixture<ListPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
