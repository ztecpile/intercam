import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorPageItemBlockComponent } from './paginator-page-item-block.component';

describe('PaginatorPageItemBlockComponent', () => {
  let component: PaginatorPageItemBlockComponent;
  let fixture: ComponentFixture<PaginatorPageItemBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorPageItemBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorPageItemBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
