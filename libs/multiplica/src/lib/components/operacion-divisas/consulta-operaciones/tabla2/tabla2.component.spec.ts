import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabla2Component } from './tabla2.component';

describe('Tabla2Component', () => {
  let component: Tabla2Component;
  let fixture: ComponentFixture<Tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
