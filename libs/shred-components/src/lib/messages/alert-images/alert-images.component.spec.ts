import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertImagesComponent } from './alert-images.component';

describe('AlertImagesComponent', () => {
  let component: AlertImagesComponent;
  let fixture: ComponentFixture<AlertImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
