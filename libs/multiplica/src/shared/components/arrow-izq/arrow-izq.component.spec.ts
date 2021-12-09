import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowIzqComponent } from './arrow-izq.component';

describe('ArrowIzqComponent', () => {
  let component: ArrowIzqComponent;
  let fixture: ComponentFixture<ArrowIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowIzqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
