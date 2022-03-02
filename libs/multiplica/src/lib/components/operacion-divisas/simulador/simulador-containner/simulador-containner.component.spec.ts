import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorContainnerComponent } from './simulador-containner.component';

describe('SimuladorContainnerComponent', () => {
  let component: SimuladorContainnerComponent;
  let fixture: ComponentFixture<SimuladorContainnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorContainnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorContainnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
