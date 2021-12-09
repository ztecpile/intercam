import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacionDocumentoComponent } from './contratacion-documento.component';

describe('ContratacionDocumentoComponent', () => {
  let component: ContratacionDocumentoComponent;
  let fixture: ComponentFixture<ContratacionDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratacionDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratacionDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
