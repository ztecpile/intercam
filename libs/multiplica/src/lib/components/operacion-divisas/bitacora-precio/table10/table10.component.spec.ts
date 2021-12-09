import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table10Component } from './table10.component';

describe('Table10Component', () => {
  let component: Table10Component;
  let fixture: ComponentFixture<Table10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
