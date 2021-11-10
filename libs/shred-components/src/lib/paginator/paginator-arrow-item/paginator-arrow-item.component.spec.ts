import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorArrowItemComponent } from './paginator-arrow-item.component';

describe('PaginatorArrowItemComponent', () => {
  let component: PaginatorArrowItemComponent;
  let fixture: ComponentFixture<PaginatorArrowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorArrowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorArrowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
