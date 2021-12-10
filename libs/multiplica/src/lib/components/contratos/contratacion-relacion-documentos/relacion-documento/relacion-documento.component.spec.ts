import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionDocumentoComponent } from './relacion-documento.component';

describe('RelacionDocumentoComponent', () => {
  let component: RelacionDocumentoComponent;
  let fixture: ComponentFixture<RelacionDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
