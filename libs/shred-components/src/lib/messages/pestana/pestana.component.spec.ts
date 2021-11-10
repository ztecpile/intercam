import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestanaComponent } from './pestana.component';

describe('PestanaComponent', () => {
  let component: PestanaComponent;
  let fixture: ComponentFixture<PestanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PestanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PestanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
