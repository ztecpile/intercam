import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasDragComponent } from './cajas-drag.component';

describe('MensuComponent', () => {
  let component: CajasDragComponent;
  let fixture: ComponentFixture<CajasDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajasDragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
