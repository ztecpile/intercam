import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Restringe-fecha-horaComponent } from './restringe-fecha-hora.component';

describe('MensuComponent', () => {
  let component: Restringe-fecha-horaComponent;
  let fixture: ComponentFixture<Restringe-fecha-horaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Restringe-fecha-horaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Restringe-fecha-horaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
