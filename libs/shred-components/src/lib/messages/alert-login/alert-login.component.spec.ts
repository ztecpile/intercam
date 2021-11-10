import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLoginComponent } from './alert-login.component';

describe('AlertLoginComponent', () => {
  let component: AlertLoginComponent;
  let fixture: ComponentFixture<AlertLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
