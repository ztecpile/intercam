import { TestBed } from '@angular/core/testing';

import { OperacionDivisasService } from './operacion-divisas.service';

describe('OperacionDivisasService', () => {
  let service: OperacionDivisasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperacionDivisasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
