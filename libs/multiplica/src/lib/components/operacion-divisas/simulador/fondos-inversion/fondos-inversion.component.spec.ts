import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosInversionComponent } from './fondos-inversion.component';

describe('FondosInversionComponent', () => {
  let component: FondosInversionComponent;
  let fixture: ComponentFixture<FondosInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondosInversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
