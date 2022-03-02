import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaBolsaComponent } from './casa-bolsa.component';

describe('CasaBolsaComponent', () => {
  let component: CasaBolsaComponent;
  let fixture: ComponentFixture<CasaBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaBolsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
