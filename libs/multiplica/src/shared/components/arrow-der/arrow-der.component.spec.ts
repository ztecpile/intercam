import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDerComponent } from './arrow-der.component';

describe('ArrowDerComponent', () => {
  let component: ArrowDerComponent;
  let fixture: ComponentFixture<ArrowDerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowDerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
