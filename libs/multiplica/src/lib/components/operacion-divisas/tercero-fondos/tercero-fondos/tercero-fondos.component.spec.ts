import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceroFondosComponent } from './tercero-fondos.component';

describe('Table3Component', () => {
  let component: TerceroFondosComponent;
  let fixture: ComponentFixture<CierreBancoInversionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceroFondosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceroFondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
