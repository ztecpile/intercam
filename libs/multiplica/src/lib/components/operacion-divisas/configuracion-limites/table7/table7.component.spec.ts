import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table7Component } from './table7.component';

describe('Table7Component', () => {
  let component: Table7Component;
  let fixture: ComponentFixture<Table7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
