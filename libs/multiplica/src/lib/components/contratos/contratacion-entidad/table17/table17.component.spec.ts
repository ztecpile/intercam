import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table17Component } from './table17.component';

describe('Table17Component', () => {
  let component: Table17Component;
  let fixture: ComponentFixture<Table17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
