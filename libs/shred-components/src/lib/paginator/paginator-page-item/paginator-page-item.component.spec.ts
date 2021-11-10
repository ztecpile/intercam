import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorPageItemComponent } from './paginator-page-item.component';

describe('PaginatorPageItemComponent', () => {
  let component: PaginatorPageItemComponent;
  let fixture: ComponentFixture<PaginatorPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
