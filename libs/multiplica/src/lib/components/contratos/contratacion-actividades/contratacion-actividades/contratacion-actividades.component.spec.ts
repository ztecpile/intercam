import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacionActividadesComponent } from './contratacion-actividades.component';

describe('ContratacionActividadesComponent', () => {
  let component: ContratacionActividadesComponent;
  let fixture: ComponentFixture<ContratacionActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratacionActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratacionActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
